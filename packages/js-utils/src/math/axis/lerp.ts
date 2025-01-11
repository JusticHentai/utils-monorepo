/**
 * 线性插值
 * ab 两点连线上 选一点代表这一段的想要值
 * 例如 1 和 5 选 0.8 代表这段线段 则 ( 1 + 5 ) * 0.8
 * @a 低点
 * @b 高点
 * @n 当前选点到低点的距离 范围[0,1]
 * @returns {number}
 */
export default function lerp(a: number, b: number, n: number): number {
  return (1 - n) * a + n * b
}
