import myPromiseAll from '../../../../packages/learn-utils/src/handwritten/MyPromiseAll'

const errorDemo = async () => {
  const p1 = new Promise((resolve) => setTimeout(() => resolve('p1'), 100))
  const p2 = new Promise((_, reject) => setTimeout(() => reject('p2 error'), 50))
  const p3 = new Promise((resolve) => setTimeout(() => resolve('p3'), 200))

  try {
    await myPromiseAll([p1, p2, p3])
    return { message: '不应该到这里' }
  } catch (error) {
    return {
      message: 'Promise.all 有一个失败',
      error, // 'p2 error'
    }
  }
}

export default errorDemo
