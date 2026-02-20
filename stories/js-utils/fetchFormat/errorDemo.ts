import { action } from 'storybook/actions'
import fetchFormat from '../../../packages/js-utils/src/fetchFormat'
import sleep from '../../../packages/js-utils/src/sleep'
import { ERROR_TYPE } from '../../../packages/js-utils/src/timeoutFormat'

const errorDemo = async () => {
  let attemptCount = 0

  const fetchFn = async (text: string) => {
    attemptCount++
    action('开始请求')(text, `第 ${attemptCount} 次尝试`)
    await sleep(500)
    action('请求失败')(text, `第 ${attemptCount} 次尝试`)
    throw new Error(`${text} error`)
  }

  // 使用 fetchFormat 包装，自动处理 asyncFormat + timeoutFormat + retryFormat
  const wrappedFn = fetchFormat<typeof fetchFn>({
    fetchFn,
    retryCount: 3,
    timeout: 3000,
  })
  const [res, err] = await wrappedFn('失败用例')

  if (err) {
    if (err.errorType === ERROR_TYPE.TIMEOUT) {
      action('请求失败用例 - 超时')({
        res,
        err,
        errMessage: err?.error?.message,
      })
    } else {
      action('请求失败用例（重试 3 次后仍失败）')({
        res,
        err,
        errMessage: err?.error?.message,
      })
    }
  } else {
    action('请求失败用例 - 成功')({ res, err })
  }
}

export default errorDemo
