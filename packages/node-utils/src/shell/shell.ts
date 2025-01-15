import Loading from '@/logger/loading'
import { exec } from 'child_process'

export type Result = [string, undefined] | [undefined, string]

const shellExec = (command: string): Promise<Result> => {
  return new Promise((resolve) => {
    const loading = new Loading()
    loading.start(`执行：${command}`)

    const commandExec = exec(command, (error, stdout, stderr) => {
      if (error) {
        loading.fail(`执行失败：${command}`)

        resolve([undefined, stderr])
      } else {
        loading.succeed(`执行成功：${command}`)

        resolve([stdout, undefined])
      }
    })

    commandExec?.stdout?.on('data', (str) => {
      console.log(str)
    })

    commandExec?.stderr?.on('data', (str) => {
      console.log(str)
    })
  })
}

export default shellExec
