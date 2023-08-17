import { mountApp } from '@/app/content-script/main'
import { createElement } from '@/utils/html/create-element'
import mainStyleSheet from '@/app/content-script/style.css?inline'

const shadowWrapper = createElement('div', { 
  id: '#app', 
  style: 'position: fixed; right: 0px; top: 0px; z-index: 99999; width: 100%; height: 100%; border: none; color-scheme: none; pointer-events: none;'
})

const [contentRoot] = createElement('div', { 
  id: 'root-app', 
  attachShadow: true, 
  attachShadowAddStyleSheets: [mainStyleSheet],
  attachShadowChildren: [shadowWrapper]
})

document.body.append(contentRoot)
mountApp(shadowWrapper)

