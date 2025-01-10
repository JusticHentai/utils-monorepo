/**
 * 从 type1 中剔除掉 type2 的类型
 */
type MyExclude<Type1, Type2> = Type1 extends Type2 ? never : Type1

export default MyExclude
