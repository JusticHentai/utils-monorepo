import { logResult } from '@/execa-verbose/complete'
import type { VerboseInfo, CommonOptions, CommonResult } from '@/execa-types'

/**
 * 应用 reject 选项
 * 同时使用 verbose 打印最终日志行
 * @param result - 子进程结果
 * @param verboseInfo - verbose 信息
 * @param options - 选项
 */
export const handleResult = <T extends CommonResult>(
  result: T,
  verboseInfo: VerboseInfo,
  options: CommonOptions
): T => {
  logResult(result, verboseInfo)

  if (result.failed && options.reject !== false) {
    throw result
  }

  return result
}
