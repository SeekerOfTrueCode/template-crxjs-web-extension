export function addStyleSheetToShadowRoot(shadowRoot: ShadowRoot, styleSheet: string, init = false) {
    const sheet = new CSSStyleSheet
    sheet.replaceSync(styleSheet)

    const adoptedStyleSheets = init ? [] : (shadowRoot.adoptedStyleSheets ?? [])
    shadowRoot.adoptedStyleSheets = [...adoptedStyleSheets, sheet]
}