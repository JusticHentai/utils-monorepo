import { action } from 'storybook/actions'
import asyncFormat from '../../../packages/js-utils/src/asyncFormat'
import retryFormat from '../../../packages/js-utils/src/retryFormat'
import sleep from '../../../packages/js-utils/src/sleep'

const failDemo = async () => {
  let attemptCount = 0
  const fn = async () => {
    attemptCount++
    action('开始执行')(attemptCount)
    await sleep(1000)
    action('执行完成')(attemptCount)
    throw new Error('总是失败')
  }

  // 先将函数转为 [res, err] 的形式
  const asyncFormatFn = asyncFormat(fn)
  // 再使用 retryFormat 包装
  const retryFn = retryFormat<typeof fn>({ fn: asyncFormatFn, retryCount: 3 })

  const res = await retryFn()

  action('重试失败用例')(res)
}

export default failDemo
