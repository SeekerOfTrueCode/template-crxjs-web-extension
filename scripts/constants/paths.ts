export const PATHS = {
  TS: {
    BACKGROUND: 'src/app/background/background.ts',
    // OFFSCREEN: 'src/app/background/offscreen/offscreen.ts'
    CONTENT_SCRIPT: 'src/app/content-script/content-script.ts'
  },
  HTML: {
    POPUP: 'src/app/popup/popup.html',
    OFFSCREEN: 'src/app/background/offscreen/offscreen.html'
  }
} as const
// (import.meta.env.MODE === 'staging' ? '' : 'public/')