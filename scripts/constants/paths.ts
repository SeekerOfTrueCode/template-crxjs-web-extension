export const PATHS = {
    TS: {
        background: "src/background.ts",
        contentScript: "src/content-script.ts"
    },
    HTML: {
        contentScript: "content-script.html",
        popup: "popup.html"
    }
}
// (import.meta.env.MODE === 'staging' ? '' : 'public/')