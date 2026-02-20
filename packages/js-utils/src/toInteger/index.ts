import toFinite from '../toFinite'

/**
 * 将 value 转换为整数
 * @param value - 要转换的值
 * @returns 返回转换后的整数
 * @example
 * toInteger(3.2) // => 3
 * toInteger('3.2') // => 3
 */
const toInteger = (value: unknown): number => {
  // 第一步：通过 toFinite 将任意值转为有限数值
  // - 非数值类型（字符串、null、undefined 等）会先转为 number
  // - NaN 转为 0，Infinity 转为 Number.MAX_VALUE，-Infinity 转为 -Number.MAX_VALUE
  // - 普通数值原样返回（如 3.2 → 3.2）
  const result = toFinite(value)

  // 第二步：用 % 1（模 1）取出小数部分
  // - 整数 % 1 === 0（如 3 % 1 → 0）
  // - 小数 % 1 得到小数部分（如 3.7 % 1 → 0.7，-3.7 % 1 → -0.7）
  // - 0 % 1 === 0
  const remainder = result % 1

  // 第三步：用原值减去小数部分，实现"向零截断"
  // - remainder 为 0（即本身是整数）时直接返回 result
  // - remainder 非 0 时，result - remainder 去掉小数部分
  //   例：3.7 - 0.7 = 3，-3.7 - (-0.7) = -3
  // - 这与 Math.trunc 行为一致：正数向下取整，负数向上取整
  return remainder ? result - remainder : result
}

export default toInteger
