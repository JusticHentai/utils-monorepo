import myPromiseAllSettled from '../../../../packages/learn-utils/src/handwritten/MyPromiseAllSettled'

const normalDemo = async () => {
  const p1 = new Promise((resolve) => setTimeout(() => resolve('p1 success'), 100))
  const p2 = new Promise((_, reject) => setTimeout(() => reject('p2 error'), 50))
  const p3 = new Promise((resolve) => setTimeout(() => resolve('p3 success'), 200))

  const result = await myPromiseAllSettled([p1, p2, p3])

  return {
    message: 'Promise.allSettled 等待所有完成',
    result,
    // [
    //   { status: 'fulfilled', value: 'p1 success' },
    //   { status: 'rejected', value: 'p2 error' },
    //   { status: 'fulfilled', value: 'p3 success' }
    // ]
  }
}

export default normalDemo
