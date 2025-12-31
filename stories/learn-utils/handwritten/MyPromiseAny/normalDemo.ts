import myPromiseAny from '../../../../packages/learn-utils/src/handwritten/MyPromiseAny'

const normalDemo = async () => {
  const p1 = new Promise((_, reject) => setTimeout(() => reject('p1 error'), 100))
  const p2 = new Promise((resolve) => setTimeout(() => resolve('p2 success'), 200))
  const p3 = new Promise((_, reject) => setTimeout(() => reject('p3 error'), 50))

  const result = await myPromiseAny([p1, p2, p3])

  return {
    message: 'Promise.any 第一个成功的',
    result, // 'p2 success'
  }
}

export default normalDemo
