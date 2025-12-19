import retry from '../../../packages/js-utils/src/retry'
import sleep from '../../../packages/js-utils/src/sleep'

const failDemo = async () => {
  const fn = async () => {
    await sleep(100)
    throw new Error('总是失败')
  }

  return retry(fn, 3)
}

export default failDemo
