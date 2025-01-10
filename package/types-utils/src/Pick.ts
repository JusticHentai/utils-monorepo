/**
 * 从一个interface: Type中 获取指定key 组成新的interface
 */
type Pick<Type extends Record<string, any>, KeyList extends keyof Type> = {
  [key in KeyList]: Type[key]
}

export default Pick
