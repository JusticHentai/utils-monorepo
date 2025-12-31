import debounce from '../../../packages/element-utils/src/debounce'

const immediateDemo = () => {
  const fn = debounce({
    cb: () => {
      console.log('立即执行回调')
      return '立即执行回调'
    },
    duration: 1000,
    immediate: true,
  })

  fn()
  return '立即执行回调，1秒内再次调用会重新计时'
}

export default immediateDemo
