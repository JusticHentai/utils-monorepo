/**
 * 返回元组Type 第一个元素的类型
 */
type First<Type extends any[]> = Type extends [] ? undefined : Type[0]

export default First
