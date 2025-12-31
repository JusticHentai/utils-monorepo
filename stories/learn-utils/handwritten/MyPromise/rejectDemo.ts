import { MyPromise } from '../../../../packages/learn-utils/src/handwritten/MyPromise'

const rejectDemo = () => {
  return new Promise((resolve) => {
    const myPromise = new MyPromise((res, rej) => {
      setTimeout(() => {
        rej('MyPromise rejected!')
      }, 100)
    })

    myPromise
      .then(
        (value: string) => value,
        (error: string) => {
          return 'Error caught: ' + error
        }
      )
      .then((value: string) => {
        resolve({
          message: 'MyPromise reject 处理成功',
          result: value,
        })
      })
  })
}

export default rejectDemo
