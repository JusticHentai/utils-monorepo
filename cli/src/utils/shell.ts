import { isArray } from '@justichentai/is'
import { exec, ExecException } from 'child_process'
import { error as myError, warn as myWarn } from './style/chalk'
import Loading from './style/loading'

/**
 * 执行单个shell命令
 * 将命令回调形式promise化 并添加chalk ora样式
 * @param command 命令
 * @param type 类型 是否报错后终止
 */
export function myShell(command: string, type: boolean): Promise<void> {
  return new Promise((resolve, reject) => {
    //开始loading
    const loading = new Loading()
    loading.start(`执行：${command}`)

    //执行命令
    exec(
      command,
      (error: ExecException | null, stdout: string, stderr: string) => {
        if (error) {
          loading.fail(`执行失败：${command}`)
          myError(error.message)

          type ? reject() : resolve()

          return
        }

        loading.succeed(`执行成功：${command}`)
        stderr && myWarn(stderr)
        console.log(stdout)
        resolve()
      }
    )
  })
}

/**
 * 执行单个 或 多个shell命令
 * @param commands 命令数组 or 命令
 * @param type 类型 是否报错后终止
 */
export default async function shell(commands: string[] | string, type = false) {
  if (!isArray(commands)) {
    await myShell(commands, type)
    return
  }

  for (const command of commands) {
    command && (await myShell(command, type))
  }
}
