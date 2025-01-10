/**
 * 传入一个返回值为boolean的类型
 * 判断后 返回 true 或者 false 变量的类型
 */
type If<Type extends boolean, TrueType, FalseType> = Type extends true
  ? TrueType
  : FalseType

export default If
