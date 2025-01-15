import Loading from '@/logger/loading'
import logger from '@/logger/logger'
import { exec } from 'child_process'

export type Result = [string, undefined] | [undefined, string]

const shellExec = (command: string): Promise<Result> => {
  return new Promise((resolve) => {
    const loading = new Loading()
    loading.start(`执行：${command}`)

    exec(command, (error, stdout, stderr) => {
      if (error) {
        loading.fail(`执行失败：${command}`)
        logger.error('[stderr]: ', stderr)

        resolve([undefined, stderr])
      } else {
        loading.succeed(`执行成功：${command}`)
        logger.info('[stdout]: ', stdout)

        resolve([stdout, undefined])
      }
    })
  })
}

export default shellExec
