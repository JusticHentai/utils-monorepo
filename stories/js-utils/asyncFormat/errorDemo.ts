import { action } from 'storybook/actions'
import asyncFormat from '../../../packages/js-utils/src/asyncFormat'
import sleep from '../../../packages/js-utils/src/sleep'

const fn = async (text: string) => {
  await sleep(1000)

  throw new Error(`${text} error`)

  return `${text} error`
}

const errorDemo = async () => {
  const [res, err] = await asyncFormat<typeof fn>(fn)('失败用例')

  action('请求失败用例')({
    res,
    err: err?.message,
  })
}

export default errorDemo
