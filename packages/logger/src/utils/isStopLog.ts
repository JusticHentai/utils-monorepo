import { STOP_LOG } from '../config/const'

const isStopLog = (input: any[]): boolean => {
  const suffix = input[input.length - 1]
  return suffix === STOP_LOG
}

export default isStopLog
