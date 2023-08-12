export const MANIFEST_PERMISSIONS = {
  /**
   *    Gives temporary access to the active tab through a user gesture. See activeTab for details.
   */
  ACTIVE_TAB: 'activeTab',
  /**
   *    Gives access to the chrome.alarms API.
   */
  ALARMS: 'alarms',
  /**
   *    Makes Chrome start up early (as soon as the user logs into their computer—before the user launches Chrome), and shut down late (even after its last window is closed until the user explicitly quits Chrome).
  
        Note: Disabled extensions are treated as if they aren't installed.
   */
  BACKGROUND: 'background',
  /**
   * 	Gives access to the chrome.bookmarks API.
   */
  BOOKMARKS: 'bookmarks',
  /**
   *    Gives access to the chrome.browsingData API.
   */
  BROWSING_DATA: 'browsingData',
  /**
   *    Gives access to the chrome.certificateProvider API.
   */
  CERTIFICATE_PROVIDER: 'certificateProvider',
  /**
   *    Required if the extension uses document.execCommand('paste').
   */
  CLIPBOARD_READ: 'clipboardRead',
  /**
   * 	Required if the extension uses document.execCommand('copy') or document.execCommand('cut').
   */
  CLIPBOARD_WRITE: 'clipboardWrite',
  /**
   * 	Gives access to the chrome.contentSettings API.
   */
  CONTENT_SETTINGS: 'contentSettings',
  /**
   * 	Gives access to the chrome.contextMenus API.
   */
  CONTEXT_MENUS: 'contextMenus',
  /**
   * 	Gives access to the chrome.cookies API.
   */
  COOKIES: 'cookies',
  /**
   *    Gives access to the chrome.debugger API.
   */
  DEBUGGER: 'debugger',
  /**
   * 	Gives access to the chrome.declarativeContent API.
   */
  DECLARATIVE_CONTENT: 'declarativeContent',
  /**
   * 	Gives your extension access to the chrome.declarativeNetRequest API. Some operations may require host permissions to perform.
   */
  DECLARATIVE_NET_REQUEST: 'declarativeNetRequest',
  /**
   * 	Gives your extension access to the chrome.declarativeNetRequest API, but requires host permissions to the request URL and initiator to act on a request.
   */
  DECLARATIVE_NET_REQUEST_WITH_HOST_ACCESS: 'declarativeNetRequestWithHostAccess',
  /**
   *    Gives access to events and methods within the chrome.declarativeNetRequest API which returns information on declarative rules matched.
   */
  DECLARATIVE_NET_REQUEST_FEEDBACK: 'declarativeNetRequestFeedback',
  /**
   * 	Gives access to the chrome.desktopCapture API.
   */
  DESKTOP_CAPTURE: 'desktopCapture',
  /**
   *    Gives access to the chrome.documentScan API.
   */
  DOCUMENT_SCAN: 'documentScan',
  /**
   *    Gives access to the chrome.downloads API.
   */
  DOWNLOADS: 'downloads',
  /**
   * 	Permission required to use chrome.downloads.open()
   */
  DOWNLOADS_OPEN: 'downloads.open',
  /**
   * 	Permission required to use chrome.downloads.setUiOptions()
   */
  DOWNLOADS_UI: 'downloads.ui',
  /**
   * 	Gives access to the chrome.enterprise.deviceAttributes API.
   */
  ENTERPRISE_DEVICE_ATTRIBUTES: 'enterprise.deviceAttributes',
  /**
   * 	Gives access to the chrome.enterprise.hardwarePlatform API.
   */
  ENTERPRISE_HARDWARE_PLATFORM: 'enterprise.hardwarePlatform',
  /**
   *    Gives access to the chrome.enterprise.networkingAttributes API.
   */
  ENTERPRISE_NETWORKING_ATTRIBUTES: 'enterprise.networkingAttributes',
  /**
   * 	Gives access to the chrome.enterprise.platformKeys API.
   */
  ENTERPRISE_PLATFORM_KEYS: 'enterprise.platformKeys',
  /**
   *    Required if the extension uses any chrome.experimental.* APIs.
   */
  EXPERIMENTAL: 'experimental',
  /**
   * 	Gives access to the chrome.fileBrowserHandler API.
   */
  FILE_BROWSER_HANDLER: 'fileBrowserHandler',
  /**
   * 	Gives access to the chrome.fileSystemProvider API.
   */
  FILE_SYSTEM_PROVIDER: 'fileSystemProvider',
  /**
   *    Gives access to the chrome.fontSettings API.
   */
  FONT_SETTINGS: 'fontSettings',
  /**
   * 	Gives access to the chrome.gcm API.
   */
  GCM: 'gcm',
  /**
   * 	Allows the extension to use the geolocation API without prompting the user for permission.
   */
  GEOLOCATION: 'geolocation',
  /**
   *    Gives access to the chrome.history API.
   */
  HISTORY: 'history',
  /**
   *    Gives access to the chrome.identity API.
   */
  IDENTITY: 'identity',
  /**
   * 	Gives access to the chrome.idle API.
   */
  IDLE: 'idle',
  /**
   *    Gives access to the chrome.loginState API.
   */
  LOGIN_STATE: 'loginState',
  /**
   *    Gives access to the chrome.management API.
   */
  MANAGEMENT: 'management',
  /**
   * 	Gives access to the native messaging API.
   */
  NATIVE_MESSAGING: 'nativeMessaging',
  /**
   * 	Gives access to the chrome.notifications API.
   */
  NOTIFICATIONS: 'notifications',
  /**
   * 	Gives access to the chrome.offscreen API.
   */
  OFFSCREEN: 'offscreen',
  /**
   * 	Gives access to the chrome.pageCapture API.
   */
  PAGE_CAPTURE: 'pageCapture',
  /**
   *    Gives access to the chrome.platformKeys API.
   */
  PLATFORM_KEYS: 'platformKeys',
  /**
   *    Gives access to the chrome.power API.
   */
  POWER: 'power',
  /**
   * 	Gives access to the chrome.printerProvider API.
   */
  PRINTER_PROVIDER: 'printerProvider',
  /**
   * 	Gives access to the chrome.printing API.
   */
  PRINTING: 'printing',
  /**
   * 	Gives access to the chrome.printingMetrics API.
   */
  PRINTING_METRICS: 'printingMetrics',
  /**
   * 	Gives access to the chrome.privacy API.
   */
  PRIVACY: 'privacy',
  /**
   * 	Gives access to the chrome.processes API.
   */
  PROCESSES: 'processes',
  /**
   * 	Gives access to the chrome.proxy API.
   */
  PROXY: 'proxy',
  /**
   * 	Gives access to the chrome.scripting API.
   */
  SCRIPTING: 'scripting',
  /**
   * 	Gives access to the chrome.search API.
   */
  SEARCH: 'search',
  /**
   * 	Gives access to the chrome.sessions API.
   */
  SESSIONS: 'sessions',
  /**
   *    Gives access to the chrome.sidePanel API.
   */
  SIDE_PANEL: 'sidePanel',
  /**
   * 	Gives access to the chrome.storage API.
   */
  STORAGE: 'storage',
  /**
   * 	Gives access to the chrome.system.cpu API.
   */
  SYSTEM_CPU: 'system.cpu',
  /**
   *    Gives access to the chrome.system.display API.
   */
  SYSTEM_DISPLAY: 'system.display',
  /**
   *    Gives access to the chrome.system.memory API.
   */
  SYSTEM_MEMORY: 'system.memory',
  /**
   * 	Gives access to the chrome.system.storage API.
   */
  SYSTEM_STORAGE: 'system.storage',
  /**
   *    Gives access to the chrome.tabCapture API.
   */
  TAB_CAPTURE: 'tabCapture',
  /**
   *    Gives access to the chrome.tabGroups API.
   */
  TAB_GROUPS: 'tabGroups',
  /**
   * 	Gives access to privileged fields of the Tab objects used by several APIs including chrome.tabs and chrome.windows. In many circumstances your extension will not need to declare the "tabs" permission to make use of these APIs.
   */
  TABS: 'tabs',
  /**
   *    Gives access to the chrome.topSites API.
   */
  TOP_SITES: 'topSites',
  /**
   * 	Gives access to the chrome.tts API.
   */
  TTS: 'tts',
  /**
   *    Gives access to the chrome.ttsEngine API.
   */
  TTS_ENGINE: 'ttsEngine',
  /**
   *    Provides an unlimited quota for storing client-side data, such as databases and local storage files. Without this permission, the extension is limited to 5 MB of local storage.
        Note: This permission applies only to Web SQL Database and application cache (see issue 58985). Also, it doesn't currently work with wildcard subdomains such as http://*.example.com.
   */
  UNLIMITED_STORAGE: 'unlimitedStorage',
  /**
   *    Gives access to the chrome.vpnProvider API.
   */
  VPN_PROVIDER: 'vpnProvider',
  /**
   *    Gives access to the chrome.wallpaper API.
   */
  WALLPAPER: 'wallpaper',
  /**
   *    Gives access to the chrome.webAuthenticationProxy API.
   */
  WEB_AUTHENTICATION_PROXY: 'webAuthenticationProxy',
  /**
   * 	Gives access to the chrome.webNavigation API.
   */
  WEB_NAVIGATION: 'webNavigation',
  /**
   * 	Gives access to the chrome.webRequest API.
   */
  WEB_REQUEST: 'webRequest',
  /**
   *    Required if the extension uses the chrome.webRequest API in a blocking fashion.
   */
  WEB_REQUEST_BLOCKING: 'webRequestBlocking'
} as const