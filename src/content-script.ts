import { PATHS } from '@@/scripts/constants/paths'

const src = chrome.runtime.getURL(PATHS.HTML.contentScript)
console.log(src)
// const iframeStyle = 'position: fixed; right: 0px; top: 0px; z-index: 99999; width: 100%; height: 100%; border: none; color-scheme: none; pointer-events: none;'
// const iframe = new DOMParser()
//     .parseFromString(`<iframe style="${iframeStyle}" class="crx" src="${src}"></iframe>`, 'text/html')
//     .body.firstElementChild as Node

// document.body.append(iframe)
