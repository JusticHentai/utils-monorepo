import { LOG } from './constant'

/**
 * 创建 logger 对象
 * 支持 info、debug、warn、error 四种日志级别
 * 使用 console.log 输出日志，颜色为对应级别颜色
 * @returns logger 对象
 */
const makeLog = () => {
  const res: Record<string, any> = {}

  for (const key in LOG) {
    const value = LOG[key as keyof typeof LOG]
    res[key] = (...input: any[]) =>
      console.log(
        `%c[${key.toUpperCase()}]`,
        `color:#ffffff;background:${value}`,
        ...input
      )
  }

  return res as Record<keyof typeof LOG, (...input: any[]) => void>
}

const logger = makeLog()

export default logger
