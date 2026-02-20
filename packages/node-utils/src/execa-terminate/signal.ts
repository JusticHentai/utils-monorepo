import { constants } from 'node:os'
import { signalsByName } from 'human-signals'

/**
 * 规范化 killSignal 选项
 * 同时验证信号是否存在
 * @param killSignal - 终止信号
 */
export const normalizeKillSignal = (
  killSignal?: string | number
): string => {
  const optionName = 'option `killSignal`'

  if (killSignal === 0) {
    throw new TypeError(`Invalid ${optionName}: 0 cannot be used.`)
  }

  return normalizeSignal(killSignal ?? 'SIGTERM', optionName)
}

/**
 * 规范化 subprocess.kill() 的信号参数
 * @param signal - 信号
 */
export const normalizeSignalArgument = (signal: string | number): string =>
  signal === 0 ? 'SIGTERM' : normalizeSignal(signal, "`subprocess.kill()`'s argument")

/**
 * 规范化信号
 */
const normalizeSignal = (signalNameOrInteger: string | number, optionName: string): string => {
  if (Number.isInteger(signalNameOrInteger)) {
    return normalizeSignalInteger(signalNameOrInteger as number, optionName)
  }

  if (typeof signalNameOrInteger === 'string') {
    return normalizeSignalName(signalNameOrInteger, optionName)
  }

  throw new TypeError(
    `Invalid ${optionName} ${String(signalNameOrInteger)}: it must be a string or an integer.\n${getAvailableSignals()}`
  )
}

/**
 * 规范化信号整数
 */
const normalizeSignalInteger = (signalInteger: number, optionName: string): string => {
  if (signalsIntegerToName.has(signalInteger)) {
    return signalsIntegerToName.get(signalInteger)!
  }

  throw new TypeError(
    `Invalid ${optionName} ${signalInteger}: this signal integer does not exist.\n${getAvailableSignals()}`
  )
}

/**
 * 获取信号整数到名称的映射
 */
const getSignalsIntegerToName = (): Map<number, string> =>
  new Map(
    Object.entries(constants.signals)
      .reverse()
      .map(([signalName, signalInteger]) => [signalInteger, signalName])
  )

const signalsIntegerToName = getSignalsIntegerToName()

/**
 * 规范化信号名称
 */
const normalizeSignalName = (signalName: string, optionName: string): string => {
  if (signalName in constants.signals) {
    return signalName
  }

  if (signalName.toUpperCase() in constants.signals) {
    throw new TypeError(
      `Invalid ${optionName} '${signalName}': please rename it to '${signalName.toUpperCase()}'.`
    )
  }

  throw new TypeError(
    `Invalid ${optionName} '${signalName}': this signal name does not exist.\n${getAvailableSignals()}`
  )
}

/**
 * 获取可用信号信息
 */
const getAvailableSignals = (): string =>
  `Available signal names: ${getAvailableSignalNames()}.\nAvailable signal numbers: ${getAvailableSignalIntegers()}.`

/**
 * 获取可用信号名称
 */
const getAvailableSignalNames = (): string =>
  Object.keys(constants.signals)
    .sort()
    .map((signalName) => `'${signalName}'`)
    .join(', ')

/**
 * 获取可用信号整数
 */
const getAvailableSignalIntegers = (): string =>
  [
    ...new Set(
      Object.values(constants.signals).sort(
        (signalInteger, signalIntegerTwo) => signalInteger - signalIntegerTwo
      )
    ),
  ].join(', ')

/**
 * 获取信号的人类可读描述
 * @param signal - 信号名称
 */
export const getSignalDescription = (signal: string): string =>
  signalsByName[signal as keyof typeof signalsByName]?.description ?? signal
