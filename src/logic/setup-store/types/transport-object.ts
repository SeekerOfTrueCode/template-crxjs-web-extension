export type TransportObject<TFrom extends string = string, TData = unknown> = {
    from: TFrom;
    value: TData;
}