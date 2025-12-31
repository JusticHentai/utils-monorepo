import debounce from '../../../packages/element-utils/src/debounce'

const basicDemo = () => {
  const fn = debounce({
    cb: () => {
      console.log('防抖回调执行')
      return '防抖回调执行'
    },
    duration: 1000,
  })

  fn()
  return '已触发防抖函数，1秒后执行回调'
}

export default basicDemo
