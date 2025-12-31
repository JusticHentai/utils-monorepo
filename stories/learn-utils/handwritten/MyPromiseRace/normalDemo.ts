import myPromiseRace from '../../../../packages/learn-utils/src/handwritten/MyPromiseRace'

const normalDemo = async () => {
  const p1 = new Promise((resolve) => setTimeout(() => resolve('p1 - 100ms'), 100))
  const p2 = new Promise((resolve) => setTimeout(() => resolve('p2 - 50ms'), 50))
  const p3 = new Promise((resolve) => setTimeout(() => resolve('p3 - 200ms'), 200))

  const result = await myPromiseRace([p1, p2, p3])

  return {
    message: 'Promise.race 最快的胜出',
    result, // 'p2 - 50ms'
  }
}

export default normalDemo
