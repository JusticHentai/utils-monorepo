import LOG_TYPE from './config/logType'
import PREFIX from './config/prefix'
import { LogMap, LogOptions, Options } from './types'
import isStopLog from './utils/isStopLog'

export default class Logger {
  public isDevEnv = true
  public logMap: LogMap = []

  constructor(options: Options = {}) {
    const { checkDevEnv } = options
    this.isDevEnv = checkDevEnv?.() || true
  }

  info(...input: any[]) {
    this.logMap.push({
      type: LOG_TYPE.INFO,
      content: input,
    })

    if (isStopLog(input)) {
      return
    }

    console.log(...PREFIX.INFO, ...input)
  }

  debug(...input: any[]) {
    if (!this.isDevEnv) {
      return
    }

    this.logMap.push({
      type: LOG_TYPE.DEBUG,
      content: input,
    })

    if (isStopLog(input)) {
      return
    }

    console.log(...PREFIX.DEBUG, ...input)
  }

  warn(...input: any[]) {
    this.logMap.push({
      type: LOG_TYPE.WARN,
      content: input,
    })

    if (isStopLog(input)) {
      return
    }

    console.log(...PREFIX.WARN, ...input)
  }

  error(...input: any[]) {
    this.logMap.push({
      type: LOG_TYPE.ERROR,
      content: input,
    })

    if (isStopLog(input)) {
      return
    }

    console.log(...PREFIX.ERROR, ...input)
  }

  log(options: LogOptions = {}): LogMap {
    const {
      filterType = [
        LOG_TYPE.INFO,
        LOG_TYPE.DEBUG,
        LOG_TYPE.WARN,
        LOG_TYPE.ERROR,
      ],
      canLog = false,
    } = options

    const newLogMap = this.logMap.filter((log) => {
      return filterType.includes(log.type)
    })

    if (!canLog) {
      return newLogMap
    }

    console.log(...PREFIX.LOG, newLogMap)

    return newLogMap
  }
}
