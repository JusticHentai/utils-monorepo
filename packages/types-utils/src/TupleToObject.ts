/**
 * 将元组转为对象类型
 */
type TupleToObject<Type extends readonly string[]> = {
  [Key in Type[number]]: Key
}

export default TupleToObject
