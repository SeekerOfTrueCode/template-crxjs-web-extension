// import { CrxPlugin } from "@crxjs/vite-plugin";

// const renameFile = (source: string, destination: string, type: 'content-script' | 'popup'): CrxPlugin => {
//     if (typeof source !== 'string' || typeof destination !== 'string') {
//         return;
//     }

//     return {
//         name: 'crx:rename-file',
//         enforce: 'post',
//         generateBundle(options, bundle) {
//             bundle[source].fileName = destination;
//         },
//         renderCrxManifest(manifest) {
//             if (type === 'popup') manifest.action.default_popup = destination;
//             if (type === 'content-script') manifest.web_accessible_resources[0].resources[0] = destination;
//             return manifest;
//         },
//     };
// };