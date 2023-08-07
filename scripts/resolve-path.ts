import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

export function resolvePath(path: string) {
  return resolve(__dirname, '..', path) // added '..' because this util function is nested and not in file root
}