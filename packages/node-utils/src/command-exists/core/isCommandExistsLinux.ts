import Loading from '@/logger/loading'
import { exec } from 'child_process'

const isCommandExistsLinux = (command: string): Promise<[boolean, any]> => {
  return new Promise((resolve) => {
    const loading = new Loading()

    loading.start(`开始检测 ${command} 命令是否存在`)

    exec(`command -v ${command}`, (err) => {
      if (err) {
        loading.fail(`${command} 命令不存在`)
        resolve([false, err])
      } else {
        loading.succeed(`${command} 命令存在`)
        resolve([true, undefined])
      }
    })
  })
}

export default isCommandExistsLinux
