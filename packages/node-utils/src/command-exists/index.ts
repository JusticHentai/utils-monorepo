import isWindow from '@/is/isWindow'
import isCommandExistsLinux from './core/isCommandExistsLinux'
import isCommandExistsWindow from './core/isCommandExistsWindow'

/**
 * 判断 command 是否存在
 */
const commandExists = async (command: string) => {
  if (isWindow) {
    return await isCommandExistsWindow(command)
  } else {
    return await isCommandExistsLinux(command)
  }
}

export default commandExists
