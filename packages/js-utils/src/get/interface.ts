/** 支持的属性路径类型 */
export type PropertyPath = string | number | symbol | (string | number | symbol)[]

/** 嵌套对象类型 */
export type NestedObject = Record<string | number | symbol, unknown>
