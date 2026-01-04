import useDebounce from '.'

// 基本用法
const { run, cancel, flush, isPending } = useDebounce(
  (value: string) => {
    console.log('搜索:', value)
  },
  { delay: 300 }
)

// 调用防抖函数
run('hello')

// 取消防抖
cancel()

// 立即执行
flush()

// 检查是否处于等待状态
console.log(isPending())

// 立即执行模式
const { run: runImmediate } = useDebounce(
  (value: string) => {
    console.log('立即搜索:', value)
  },
  { delay: 300, immediate: true }
)

runImmediate('world')

// 最大等待时间
const { run: runWithMaxWait } = useDebounce(
  (value: string) => {
    console.log('带最大等待:', value)
  },
  { delay: 300, maxWait: 1000 }
)

runWithMaxWait('test')
