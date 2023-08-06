import type { App } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import generatedRoutes from 'virtual:generated-pages'
import { setupLayouts } from 'virtual:generated-layouts'
const routes = setupLayouts(generatedRoutes)

function pathRemoveBaseRouteFromStart(path: string, baseRoute: string): string {
    const PREFIX = `/${baseRoute}`;
    const newPath = path.replace(new RegExp(`^${PREFIX}`, 'g'), "");
    return newPath === '' ? `/` : newPath
}

export function setupRouter(app: App, baseRoute: string) {
    const popupRoutes = routes.filter(x => x.path.includes(baseRoute))
    const resultPages = popupRoutes.map(r => ({
        ...r,
        path: pathRemoveBaseRouteFromStart(r.path, baseRoute)
    }))
    console.table(resultPages)
    const router = createRouter({ history: createWebHashHistory(), routes: resultPages })
    app.use(router)
}
