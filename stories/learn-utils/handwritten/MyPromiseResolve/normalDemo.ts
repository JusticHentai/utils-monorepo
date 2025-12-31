import myPromiseResolve from '../../../../packages/learn-utils/src/handwritten/MyPromiseResolve'

const normalDemo = async () => {
  // 包装普通值
  const result1 = await myPromiseResolve('hello')

  // 包装对象
  const result2 = await myPromiseResolve({ name: 'test', value: 123 })

  return {
    message: 'Promise.resolve 包装值',
    result1, // 'hello'
    result2, // { name: 'test', value: 123 }
  }
}

export default normalDemo
