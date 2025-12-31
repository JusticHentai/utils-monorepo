import throttleByRaf from '../../../packages/element-utils/src/throttleByRaf'

const basicDemo = () => {
  const [fn, cancel] = throttleByRaf(() => {
    console.log('RAF 节流回调执行')
  })

  fn()
  return { message: '已触发 RAF 节流函数', cancel }
}

export default basicDemo
