/**
 * 接口转联合对象
 */
type ObjectToUnion<T extends Object> = keyof T

export default ObjectToUnion
