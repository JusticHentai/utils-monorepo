import sleep from '../../../packages/js-utils/src/sleep'

const normalDemo = async () => {
  await sleep(1000)
  return 'sleep completed'
}

export default normalDemo
