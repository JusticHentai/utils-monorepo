import asyncFormat from '../../../packages/js-utils/src/asyncFormat'
import sleep from '../../../packages/js-utils/src/sleep'

const fn = async (text: string) => {
  await sleep(1000)

  return `${text} success`
}

const successDemo = async () => {
  const [res, err] = await asyncFormat<typeof fn>(fn)('成功用例')

  return {
    res,
    err,
  }
}

export default successDemo
