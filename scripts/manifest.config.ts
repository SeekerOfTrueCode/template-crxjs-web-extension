import { defineManifest } from '@crxjs/vite-plugin'
import packageJson from '../package.json'
import { PATHS } from './constants/paths'
import { capitalize } from './utils/capitalize'
import { parseVersion } from './utils/parse-version'

const normalizedName = capitalize(packageJson.name).split('_').join(' ')
const [major, minor, patch, label] = parseVersion(packageJson.version)

export default defineManifest(async (env) => ({
  manifest_version: 3,
  name:
        env.mode === 'staging'
          ? `[INTERNAL] ${normalizedName}`
          : normalizedName,
  // up to four numbers separated by dots
  version: `${major}.${minor}.${patch}.${label}`,
  // semver is OK in "version_name"
  version_name: packageJson.version,
  background: {
    service_worker: PATHS.TS.background,
    type: 'module'
  },
  action: {
    default_popup: PATHS.HTML.popup
  },
  web_accessible_resources: [],
  content_scripts: [{
    matches: ['https://*/*'],
    js: [PATHS.TS.contentScript]
  }],
  permissions: [
    'activeTab'
  ]
}))
