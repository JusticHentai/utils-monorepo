/**
 * 获取 min 和 max 之间的随机数
 */
const random = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min)) + min
}

export default random
