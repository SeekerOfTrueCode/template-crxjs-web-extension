import { TransportObject } from './transport-object'

export type TransportItem<TFrom extends string = string, TData = unknown> = {
    [key: string]: TransportObject<TFrom, TData>
}