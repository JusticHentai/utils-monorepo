import prettyMs from 'pretty-ms'
import { isVerbose } from './values'
import { verboseLog } from './log'
import { logError } from './error'
import type { VerboseInfo, CommonResult } from '@/execa-types'

/**
 * 当 verbose 为 short|full|custom 时，打印每个命令的完成信息、持续时间和错误
 * @param result - 子进程结果
 * @param verboseInfo - verbose 信息
 */
export const logResult = (result: CommonResult, verboseInfo: VerboseInfo): void => {
  if (!isVerbose(verboseInfo)) {
    return
  }

  logError(result, verboseInfo)
  logDuration(result, verboseInfo)
}

/**
 * 打印持续时间
 */
const logDuration = (result: CommonResult, verboseInfo: VerboseInfo): void => {
  const verboseMessage = `(done in ${prettyMs(result.durationMs)})`
  verboseLog({
    type: 'duration',
    verboseMessage,
    verboseInfo,
    result,
  })
}
