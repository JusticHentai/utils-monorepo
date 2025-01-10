/**
 * 嵌套的对象也能 readonly
 */
type DeepReadonly<Type extends { [Key: string]: any }> = {
  readonly [Key in keyof Type]: Type[Key] extends Record<string, unknown>
    ? DeepReadonly<Type[Key]>
    : Type[Key]
}

export default DeepReadonly
