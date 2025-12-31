import { MyPromise } from '../../../../packages/learn-utils/src/handwritten/MyPromise'

const normalDemo = () => {
  return new Promise((resolve) => {
    const myPromise = new MyPromise((res, rej) => {
      setTimeout(() => {
        res('MyPromise resolved!')
      }, 100)
    })

    myPromise
      .then((value: string) => {
        return value + ' -> then1'
      })
      .then((value: string) => {
        resolve({
          message: 'MyPromise 链式调用成功',
          result: value + ' -> then2',
        })
      })
  })
}

export default normalDemo
