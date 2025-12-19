import sleep from '../../../packages/js-utils/src/sleep'
import timeout from '../../../packages/js-utils/src/timeout'

const successDemo = async () => {
  const fn = async () => {
    await sleep(100)
    return '成功'
  }

  return timeout(fn, 1000)
}

export default successDemo
