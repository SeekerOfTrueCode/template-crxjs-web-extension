export const PATHS = {
  TS: {
    BACKGROUND: 'src/background.ts',
    CONTENT_SCRIPT: 'src/content-script.ts'
    // OFFSCREEN: 'src/offscreen.ts'
  },
  HTML: {
    POPUP: 'popup.html',
    OFFSCREEN: 'offscreen.html'
  }
} as const
// (import.meta.env.MODE === 'staging' ? '' : 'public/')