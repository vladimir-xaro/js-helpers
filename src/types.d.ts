export function isObject(item: any): boolean;

export function merge<T>(target: any, source: any, options?: MergeOptions): T;

export interface MergeOptions {
  mergeObjects?:  boolean;
  mergeArrays?:   boolean;
}