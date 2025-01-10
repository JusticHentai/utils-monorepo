/**
 * 元组push 添加类型
 */
type Push<Type1 extends any[], Type2> = [...Type1, Type2]

export default Push
