import timeout from '../../../packages/js-utils/src/timeout'
import sleep from '../../../packages/js-utils/src/sleep'

const timeoutDemo = async () => {
  const fn = async () => {
    await sleep(2000)
    return '成功'
  }

  return timeout(fn, 1000)
}

export default timeoutDemo
