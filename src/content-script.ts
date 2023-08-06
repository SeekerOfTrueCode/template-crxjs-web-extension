import { mountApp } from '@/app/content-script/main'
const containerStyle = 'position: fixed; right: 0px; top: 0px; z-index: 99999; width: 100%; height: 100%; border: none; color-scheme: none; pointer-events: none;'

const contentRoot = document.createElement("div");
contentRoot.id = "root-app";
const shadowRoot = contentRoot.attachShadow({ mode: "open" });
const shadowWrapper = document.createElement("div");
shadowWrapper.style.cssText = containerStyle;
shadowWrapper.id = "#app";
document.body.append(contentRoot);
shadowRoot.append(shadowWrapper);
mountApp(shadowWrapper);