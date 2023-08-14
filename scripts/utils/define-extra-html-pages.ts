export function defineExtraHtmlPages(pages: [name: string, path: string][]): { [entryAlias: string]: string } {
  return Object.fromEntries(pages)
}