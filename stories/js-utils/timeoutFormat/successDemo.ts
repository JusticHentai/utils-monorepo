import { action } from 'storybook/actions'
import asyncFormat from '../../../packages/js-utils/src/asyncFormat'
import sleep from '../../../packages/js-utils/src/sleep'
import timeoutFormat, {
  ERROR_TYPE,
} from '../../../packages/js-utils/src/timeoutFormat'

const successDemo = async () => {
  const fn = async () => {
    await sleep(100)
    return '成功'
  }

  // 先将函数转为 [res, err] 的形式
  const asyncFormatFn = asyncFormat(fn)
  // 再使用 timeoutFormat 包装
  const timeoutFn = timeoutFormat<typeof fn>({
    fn: asyncFormatFn,
    timeout: 1000,
  })
  const [result, error] = await timeoutFn()

  if (error) {
    if (error.errorType === ERROR_TYPE.TIMEOUT) {
      action('异步函数先完成 - 超时错误')({ result, error })
    } else {
      action('异步函数先完成 - 普通错误')({ result, error })
    }
  } else {
    action('异步函数先完成 - 成功')({ result, error })
  }
}

export default successDemo
