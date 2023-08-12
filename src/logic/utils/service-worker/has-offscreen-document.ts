/// <reference lib="webworker" />

export async function hasOffscreenDocument(serviceWorker: ServiceWorkerGlobalScope, offscreenUrl: string): Promise<boolean> {
  const matchedClients = await serviceWorker.clients.matchAll()
  //   console.log('hasOffscreenDocument', matchedClients)
  for (const client of matchedClients) {
    if (client.url === offscreenUrl) {
      return true
    }
  }
  return false
}
