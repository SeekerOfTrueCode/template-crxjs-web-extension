import { defineManifest } from '@crxjs/vite-plugin'
import packageJson from '../package.json'
import { PATHS } from './constants/paths'
import { MATCHES } from './constants/matches'
import { MANIFEST_PERMISSIONS } from './constants/manifest-permissions'
import { capitalize } from './utils/capitalize'
import { parseVersion } from './utils/parse-version'

export default defineManifest(async (env) => {
  const normalizedName = capitalize(packageJson.name).split('_').join(' ')
  const [major, minor, patch, label] = parseVersion(packageJson.version)
  const version = `${major}.${minor}.${patch}.${label}` // up to four numbers separated by dots

  const isDev = env.mode === 'staging'

  return {
    manifest_version: 3,
    name: `${isDev ? '[INTERNAL] ' : ''}${normalizedName}`,
    version,
    version_name: packageJson.version, // semver is OK in "version_name"
    background: {
      service_worker: PATHS.TS.BACKGROUND,
      type: 'module'
    },
    action: {
      default_popup: PATHS.HTML.POPUP
    },
    web_accessible_resources: [
      {
        resources: [PATHS.HTML.OFFSCREEN],
        matches: [MATCHES.ALL]
      }
    ],
    content_scripts: [
      {
        matches: [MATCHES.ALL],
        js: [PATHS.TS.CONTENT_SCRIPT]
      }
      // {
      //   matches: [MATCHES.GOOGLE],
      //   js: [PATHS.TS.OFFSCREEN] // FIXME: HERE I can check variable if staging and use ts.js for dev and just ts for build
      // }
    ],
    permissions: [
      MANIFEST_PERMISSIONS.TABS,
      MANIFEST_PERMISSIONS.STORAGE,
      MANIFEST_PERMISSIONS.ACTIVE_TAB,
      MANIFEST_PERMISSIONS.NOTIFICATIONS,
      MANIFEST_PERMISSIONS.OFFSCREEN,
      MANIFEST_PERMISSIONS.ALARMS
      // MANIFEST_PERMISSIONS.MANAGEMENT
      // 'http://*/',
      // 'https://*/'
    ]
    // content_security_policy: `script-src 'self' http://localhost:${port}; object-src 'self'; script-src-elem 'self' http://localhost:${port} https://www.youtube.com;`
  }
})
