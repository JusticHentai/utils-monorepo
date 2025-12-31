import throttle from '../../../packages/element-utils/src/throttle'

const basicDemo = () => {
  const fn = throttle({
    cb: () => {
      console.log('节流回调执行')
      return '节流回调执行'
    },
    duration: 1000,
  })

  fn()
  return '已触发节流函数，1秒后可再次执行'
}

export default basicDemo
