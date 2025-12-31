import myPromiseAll from '../../../../packages/learn-utils/src/handwritten/MyPromiseAll'

const normalDemo = async () => {
  const p1 = new Promise((resolve) => setTimeout(() => resolve('p1'), 100))
  const p2 = new Promise((resolve) => setTimeout(() => resolve('p2'), 200))
  const p3 = new Promise((resolve) => setTimeout(() => resolve('p3'), 50))

  const result = await myPromiseAll([p1, p2, p3])

  return {
    message: 'Promise.all 全部成功',
    result, // ['p1', 'p2', 'p3']
  }
}

export default normalDemo
