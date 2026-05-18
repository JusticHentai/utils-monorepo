/**
 * 检查当前运行环境是否支持 TextEncoder
 *
 * @returns 是否支持 TextEncoder
 */
const supportTextEncoder = (): boolean => {
  return typeof TextEncoder !== 'undefined'
}

export default supportTextEncoder
