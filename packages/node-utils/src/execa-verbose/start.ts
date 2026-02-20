import { isVerbose } from './values'
import { verboseLog } from './log'
import type { VerboseInfo } from '@/execa-types'

/**
 * 当 verbose 为 short|full|custom 时，打印每个命令
 * @param escapedCommand - 转义后的命令
 * @param verboseInfo - verbose 信息
 */
export const logCommand = (escapedCommand: string, verboseInfo: VerboseInfo): void => {
  if (!isVerbose(verboseInfo)) {
    return
  }

  verboseLog({
    type: 'command',
    verboseMessage: escapedCommand,
    verboseInfo,
  })
}
