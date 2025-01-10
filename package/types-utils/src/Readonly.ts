/**
 * 从一个 interface：Type中 获取所有key转为 readonly
 */
type Readonly<Type1 extends Object, Type2 extends keyof Type1 = keyof Type1> = {
  readonly [Key in keyof Type1 as Key extends Type2 ? Key : never]: Type1[Key]
} & {
  [Key in keyof Type1 as Key extends Type2 ? never : Key]: Type1[Key]
}

export default Readonly
