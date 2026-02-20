import { action } from 'storybook/actions'
import fetchFormat from '../../../packages/js-utils/src/fetchFormat'
import sleep from '../../../packages/js-utils/src/sleep'
import { ERROR_TYPE } from '../../../packages/js-utils/src/timeoutFormat'

const successDemo = async () => {
  const fetchFn = async (text: string) => {
    action('开始请求')(text)
    await sleep(500)
    action('请求完成')(text)
    return `${text} success`
  }

  // 使用 fetchFormat 包装，自动处理 asyncFormat + timeoutFormat + retryFormat
  const wrappedFn = fetchFormat({ fetchFn, retryCount: 3, timeout: 3000 })
  const [res, err] = await wrappedFn('成功用例')

  if (err) {
    if (err.errorType === ERROR_TYPE.TIMEOUT) {
      action('请求成功用例 - 超时')({ res, err })
    } else {
      action('请求成功用例 - 错误')({ res, err })
    }
  } else {
    action('请求成功用例 - 成功')({ res, err })
  }
}

export default successDemo
