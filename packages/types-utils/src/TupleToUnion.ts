/**
 * 元组 转 联合对象
 */
type TupleToUnion<Type extends any[]> = Type[number]

export default TupleToUnion
