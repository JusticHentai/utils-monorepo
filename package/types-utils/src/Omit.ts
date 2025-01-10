/**
 * 从interface中剔除 联合类型的key 返回interface
 */
type MyOmit<Type1 extends { [key: string]: any }, Type2 extends keyof Type1> = {
  [Key in Exclude<keyof Type1, Type2>]: Type1[Key]
}

export default MyOmit
