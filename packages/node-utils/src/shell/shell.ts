import { exec } from 'child_process'

export type Result = [string, undefined] | [undefined, string]

const shellExec = (command: string): Promise<Result> => {
  return new Promise((resolve) => {
    const commandExec = exec(command, (error, stdout, stderr) => {
      if (error) {
        resolve([undefined, stderr])
      } else {
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
