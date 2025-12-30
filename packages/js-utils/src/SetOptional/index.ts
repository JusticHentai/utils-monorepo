/**
 * 设置 interface 的 key 为可选
 */
type SetOptional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>

export default SetOptional
