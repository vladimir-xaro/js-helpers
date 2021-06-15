import { MergeOptions } from "../types";
import isObject from "./isObject";

export default function merge<T>(target: any, source: any, options: MergeOptions = {}): T {
  const mergeObject: boolean = options.mergeObjects === undefined ? true : !!options.mergeObjects;

  if (isObject(target) && isObject(source)) {
    for (const key of Object.keys(source)) {
      if (mergeObject && isObject(source[key])) {
        if (!target[key] || !isObject(target[key])) {
          target[key] = source[key];
        }

        merge(target[key], source[key]);
      } else if (options.mergeArrays && Array.isArray(source[key])) {
        console.log(key);
        if (Array.isArray(target[key])) {
          target[key].push(...source[key]);
        } else {
          Object.assign(target, {
            [key]: source[key]
          })
        }
      } else {
        Object.assign(target, {
          [key]: source[key]
        })
      }
    }
  }
  return target as T;
}