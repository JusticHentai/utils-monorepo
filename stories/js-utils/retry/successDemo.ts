import retry from '../../../packages/js-utils/src/retry'
import sleep from '../../../packages/js-utils/src/sleep'

let attemptCount = 0

const successDemo = async () => {
  attemptCount = 0

  const fn = async () => {
    attemptCount++
    await sleep(100)
    if (attemptCount < 2) {
      throw new Error('失败')
    }
    return '成功'
  }

  return retry(fn, 3)
}

export default successDemo
