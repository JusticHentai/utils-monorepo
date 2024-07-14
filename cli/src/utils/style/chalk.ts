import chalk from 'chalk'

/**
 * chalk错误样式
 * @param message 错误信息
 */
export function error(message: string | Error) {
  console.log(chalk.red('错误：'), message)
}

/**
 * chalk警告样式
 * @param message 信息
 */
export function warn(message: string) {
  console.log(chalk.hex('#FFA500')('警告：'), message)
}
