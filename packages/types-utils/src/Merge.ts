/**
 * 合并两个 interface
 * 冲突第二个覆盖第一个
 */
type Merge<
  Type1 extends { [Key: string]: any },
  Type2 extends { [Key: string]: any }
> = {
  [Key in keyof (Type1 & Type2)]: Key extends keyof Type2
    ? Type2[Key]
    : Key extends keyof Type1
    ? Type1[Key]
    : never
}

export default Merge
