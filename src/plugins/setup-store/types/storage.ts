/* eslint-disable @typescript-eslint/no-explicit-any */
export const AccessLevel = {
  TRUSTED_AND_UNTRUSTED_CONTEXTS: 'TRUSTED_AND_UNTRUSTED_CONTEXTS',
  TRUSTED_CONTEXTS: 'TRUSTED_CONTEXTS'
}
type AccessLevel = keyof typeof AccessLevel;

export interface StorageChange {
    /** Optional. The new value of the item, if there is a new value. */
    newValue?: any;
    /** Optional. The old value of the item, if there was an old value. */
    oldValue?: any;
}

export interface StorageAreaChangedEvent
    extends chrome.events.Event<(changes: { [key: string]: StorageChange }) => void> { }

export interface StorageExtra {
    /**
         * Gets the amount of space (in bytes) being used by one or more items.
         * @param callback Callback with the amount of space being used by storage, or on failure (in which case runtime.lastError will be set).
         * Parameter bytesInUse: Amount of space being used in storage, in bytes.
         */
    getBytesInUse(callback: (bytesInUse: number) => void): void;
    /**
     * Gets the amount of space (in bytes) being used by one or more items.
     * @param keys Optional. A single key or list of keys to get the total usage for. An empty list will return 0. Pass in null to get the total usage of all of storage.
     * @return A Promise that resolves with a number
     */
    getBytesInUse(keys?: string | string[] | null): Promise<number>;
    /**
     * Gets the amount of space (in bytes) being used by one or more items.
     * @param keys Optional. A single key or list of keys to get the total usage for. An empty list will return 0. Pass in null to get the total usage of all of storage.
     * @param callback Callback with the amount of space being used by storage, or on failure (in which case runtime.lastError will be set).
     * Parameter bytesInUse: Amount of space being used in storage, in bytes.
     */
    getBytesInUse(keys: string | string[] | null, callback: (bytesInUse: number) => void): void;
    /**
     * Sets the desired access level for the storage area. The default will be only trusted contexts.
     * @param accessOptions An object containing an accessLevel key which contains the access level of the storage area.
     * @return A void Promise.
     */
    setAccessLevel(accessOptions: { accessLevel: AccessLevel }): Promise<void>;
    /**
     * Sets the desired access level for the storage area. The default will be only trusted contexts.
     * @param accessOptions An object containing an accessLevel key which contains the access level of the storage area.
     * @param callback Optional.
     */
    setAccessLevel(accessOptions: { accessLevel: AccessLevel }, callback: () => void): void;
}

export interface StorageCore {
    /**
 * Removes all items from storage.
 * @return A void Promise
 */
    clear(): Promise<void>;
    /**
     * Removes all items from storage.
     * @param callback Optional.
     * Callback on success, or on failure (in which case runtime.lastError will be set).
     */
    clear(callback: () => void): void;
    /**
     * Sets multiple items.
     * @param items An object which gives each key/value pair to update storage with. Any other key/value pairs in storage will not be affected.
     * Primitive values such as numbers will serialize as expected. Values with a typeof "object" and "function" will typically serialize to {}, with the exception of Array (serializes as expected), Date, and Regex (serialize using their String representation).
     * @return A void Promise
     */
    set(items: { [key: string]: any }): Promise<void>;
    /**
     * Sets multiple items.
     * @param items An object which gives each key/value pair to update storage with. Any other key/value pairs in storage will not be affected.
     * Primitive values such as numbers will serialize as expected. Values with a typeof "object" and "function" will typically serialize to {}, with the exception of Array (serializes as expected), Date, and Regex (serialize using their String representation).
     * @param callback Optional.
     * Callback on success, or on failure (in which case runtime.lastError will be set).
     */
    set(items: { [key: string]: any }, callback: () => void): void;
    /**
     * Removes one or more items from storage.
     * @param keys A single key or a list of keys for items to remove.
     * @param callback Optional.
     * @return A void Promise
     */
    remove(keys: string | string[]): Promise<void>;
    /**
     * Removes one or more items from storage.
     * @param keys A single key or a list of keys for items to remove.
     * @param callback Optional.
     * Callback on success, or on failure (in which case runtime.lastError will be set).
     */
    remove(keys: string | string[], callback: () => void): void;
    /**
     * Gets the entire contents of storage.
     * @param callback Callback with storage items, or on failure (in which case runtime.lastError will be set).
     * Parameter items: Object with items in their key-value mappings.
     */
    get(callback: (items: { [key: string]: any }) => void): void;
    /**
     * Gets one or more items from storage.
     * @param keys A single key to get, list of keys to get, or a dictionary specifying default values.
     * An empty list or object will return an empty result object. Pass in null to get the entire contents of storage.
     * @return A Promise that resolves with an object containing items
     */
    get(keys?: string | string[] | { [key: string]: any } | null): Promise<{ [key: string]: any }>;
    /**
     * Gets one or more items from storage.
     * @param keys A single key to get, list of keys to get, or a dictionary specifying default values.
     * An empty list or object will return an empty result object. Pass in null to get the entire contents of storage.
     * @param callback Callback with storage items, or on failure (in which case runtime.lastError will be set).
     * Parameter items: Object with items in their key-value mappings.
     */
    get(keys: string | string[] | { [key: string]: any } | null, callback: (items: { [key: string]: any }) => void): void;
    /**
     * Fired when one or more items change within this storage area.
     * @param keys A single key to get, list of keys to get, or a dictionary specifying default values.
     * An empty list or object will return an empty result object. Pass in null to get the entire contents of storage.
     * @param callback Callback with storage items, or on failure (in which case runtime.lastError will be set).
     * Parameter items: Object with items in their key-value mappings.
     */
    onChanged: StorageAreaChangedEvent;
}

export type Storage = (StorageCore & Partial<StorageExtra>)