const opt = Object.prototype.toString

export function isArray(obj: unknown): obj is unknown[] {
  return opt.call(obj) === '[object Array]'
}

export function isObject(obj: unknown): obj is Record<string, unknown> {
  return opt.call(obj) === '[object Object]'
}

export function isString(obj: unknown): obj is string {
  return opt.call(obj) === '[object String]'
}

export function isNumber(obj: unknown): obj is number {
  return opt.call(obj) === '[object Number]' && obj === obj
}

export function isBoolean(obj: unknown): obj is boolean {
  return opt.call(obj) === '[object Boolean]'
}

export function isFunction(
  obj: unknown
): obj is (...args: unknown[]) => unknown {
  return typeof obj === 'function'
}

export function isUndefined(obj: unknown): obj is undefined {
  return obj === undefined
}

export function isNull(obj: unknown): obj is null {
  return obj === null
}

export function isNullOrUndefined(obj: unknown): obj is null | undefined {
  return obj === null || obj === undefined
}

export function isEmptyObject(obj: unknown): boolean {
  return isObject(obj) && Object.keys(obj).length === 0
}

export function isServerRendering(): boolean {
  return typeof window === 'undefined' || typeof document === 'undefined'
}
