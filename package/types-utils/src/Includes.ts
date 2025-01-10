import Equal from './Equal'

/**
 * 判断 type 是否内涵 type2
 */
type Includes<Type extends any[], Type2> = Type extends [
  infer First,
  ...infer Rest
]
  ? Equal<First, Type2> extends true
    ? true
    : Includes<Rest, Type2>
  : false

export default Includes
