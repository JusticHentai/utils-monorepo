import { exec, ExecException } from 'child_process'

/**
 * 执行单个shell命令
 * 将命令回调形式promise化 并添加chalk ora样式
 * @param command 命令
 * @param type 类型 是否报错后终止
 */
export function myShell(command: string, type: boolean): Promise<void> {
  return new Promise((resolve, reject) => {
    //执行命令
    exec(
      command,
      (error: ExecException | null, stdout: string, stderr: string) => {
        if (error) {
          console.log(error)

          type ? reject() : resolve()

          return
        }

        stderr && console.log(stderr)
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
  if (typeof commands === 'string') {
    await myShell(commands as string, type)
    return
  }

  for (const command of commands as string[]) {
    command && (await myShell(command, type))
  }
}
