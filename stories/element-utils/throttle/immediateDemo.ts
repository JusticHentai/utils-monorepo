import throttle from '../../../packages/element-utils/src/throttle'

const immediateDemo = () => {
  const fn = throttle({
    cb: () => {
      console.log('立即执行回调')
      return '立即执行回调'
    },
    duration: 1000,
    immediate: true,
  })

  fn()
  return '立即执行回调，1秒内再次调用会被忽略'
}

export default immediateDemo
