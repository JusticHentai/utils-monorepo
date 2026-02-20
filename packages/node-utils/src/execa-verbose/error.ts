import { verboseLog } from './log'
import type { VerboseInfo, CommonResult } from '@/execa-types'
import { ExecaError, ExecaSyncError } from '@/execa-return/finalError'

/**
 * 打印错误信息
 * @param result - 子进程结果
 * @param verboseInfo - verbose 信息
 */
export const logError = (result: CommonResult, verboseInfo: VerboseInfo): void => {
  if (!result.failed) {
    return
  }

  const error = result as unknown as ExecaError | ExecaSyncError
  const errorMessage = error.shortMessage ?? error.message ?? 'Unknown error'

  verboseLog({
    type: 'error',
    verboseMessage: errorMessage,
    verboseInfo,
    result,
  })
}
