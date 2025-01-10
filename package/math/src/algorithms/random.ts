/**
 * 随机数
 * @min 随机起点
 * @max 随机终点
 * @returns 随机数
 */
export default function random(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min)) + min
}
