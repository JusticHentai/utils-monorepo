/**
 * 合并两个对象
 */
type Overwrite<
  T extends {
    [key: string]: any
  },
  U
> = Omit<T, keyof U> & U

export default Overwrite
