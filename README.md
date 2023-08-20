# Template crxjs web extension

Simple template made to simplify the work with crxjs library to quickly make / prototype the easily deployable web extensions.

## Features

- [X] 📚 TypeScript setup
- [X] 📚 Linting with Eslint setup
- [X] 📚 Testing with Vitest setup
- [X] 📚 Prototyping and testing with Storybook setup
- [X] 📚 Localization with Vue-I18n setup
- [X] 📦 [Crxjs library basic setup (@crxjs/vite-plugin)](@crxjs/vite-plugin)
- [X] 📦 [State & Store Management (Pinia)](https://pinia.vuejs.org/)
- [X] 📦 [State persistance plugin for Pinia configured for extension cross app synch (pinia-plugin-persistedstate-2)](https://github.com/iendeavor/pinia-plugin-persistedstate-2)
- [X] 📦 [Vue Composition Collection (Vueuse)](https://vueuse.org/)
- [X] 📦 [Nuxt-like layouts support (vite-plugin-vue-layouts)]([vite-plugin-vue-layouts](https://github.com/JohnCampionJr/vite-plugin-vue-layouts))
- [X] 📦 [Nuxt-like pages support (vite-plugin-vue-pages)]([vite-plugin-vue-pages](https://github.com/hannoeru/vite-plugin-pages))
- [X] 📦 [Auto import of chosen folders & libraries and vue globals (unplugin-auto-import)](https://github.com/antfu/unplugin-auto-import)
- [X] 📦 [Auto registration for vue components from chosen folders & libraries (unplugin-vue-components)](https://github.com/antfu/unplugin-vue-components)

## To Dos

- [ ] ❗ Fix `offscreen.html` which doesn't render imported script `offscreen.ts` in dev
- [ ] ❓ Maybe replace "vite-plugin-vue-pages" with [unplugin-vue-router](https://github.com/posva/unplugin-vue-router)
- [ ] ❓ Maybe replace "pinia-plugin-persistedstate-2" (deprecated) with [pinia-plugin-persistedstate](https://prazdevs.github.io/pinia-plugin-persistedstate/guide/migrating.html)
- [ ] ❕ Prepare separate ts.config for storybook
- [ ] ❕ Fix typings
