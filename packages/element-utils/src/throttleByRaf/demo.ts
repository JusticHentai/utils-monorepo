import throttleByRaf from '.'

const [fn, cancel] = throttleByRaf(() => {
  console.log('cb')
})

fn()

// 卸载时调用
cancel()
