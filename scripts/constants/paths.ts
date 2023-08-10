export const PATHS = {
  TS: {
    background: 'src/background.ts',
    contentScript: 'src/content-script.ts'
  },
  HTML: {
    popup: 'popup.html'
  }
} as const
// (import.meta.env.MODE === 'staging' ? '' : 'public/')