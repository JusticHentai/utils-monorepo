/**
 * 组合两个数组类型
 */
type Concat<Array1 extends any[], Array2 extends any[]> = [...Array1, ...Array2]

export default Concat
