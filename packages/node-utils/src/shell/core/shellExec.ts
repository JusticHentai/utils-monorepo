import logger from '@/logger/logger'
import { spawn } from 'child_process'

const shellExec = (command: string): Promise<boolean> => {
  return new Promise((resolve) => {
    logger.info(`${command} 开始执行`)
    const child = spawn(command, [], {
      stdio: 'inherit', // 将子进程的输入/输出重定向到父进程
      shell: true,
    })

    child?.stdout?.on('data', (str) => {
      console.log(str)
    })

    child?.stderr?.on('data', (str) => {
      console.log(str)
    })

    child?.on('exit', (code) => {
      if (!code) {
        logger.info(`${command} 执行成功`)

        resolve(true)
      } else {
        logger.error(`${command} 执行失败`)

        resolve(false)
      }
    })
  })
}

export default shellExec
