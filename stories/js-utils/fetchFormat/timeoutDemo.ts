import { action } from 'storybook/actions'
import fetchFormat from '../../../packages/js-utils/src/fetchFormat'
import sleep from '../../../packages/js-utils/src/sleep'
import { ERROR_TYPE } from '../../../packages/js-utils/src/timeoutFormat'

const timeoutDemo = async () => {
  let attemptCount = 0

  const fetchFn = async (text: string) => {
    attemptCount++
    action('开始请求')(text, `第 ${attemptCount} 次尝试`)
    await sleep(2000) // 超过 1000ms 超时时间
    action('请求完成')(text, `第 ${attemptCount} 次尝试`)
    return `${text} success`
  }

  // 使用 fetchFormat 包装，设置 1000ms 超时
  const wrappedFn = fetchFormat({ fetchFn, retryCount: 3, timeout: 1000 })
  const [res, err] = await wrappedFn('超时用例')

  if (err) {
    if (err.errorType === ERROR_TYPE.TIMEOUT) {
      action('超时用例（每次请求都超时，重试 3 次后返回超时错误）')({
        res,
        err,
        errMessage: err?.error?.message,
      })
    } else {
      action('超时用例 - 普通错误')({
        res,
        err,
        errMessage: err?.error?.message,
      })
    }
  } else {
    action('超时用例 - 成功')({ res, err })
  }
}

export default timeoutDemo
