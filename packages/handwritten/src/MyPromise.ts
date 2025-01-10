type MyFunction = (...params: any[]) => any

export class MyPromise {
  status: 'pending' | 'success' | 'failure' = 'pending'
  value: any
  successQueue: MyFunction[] = []
  failureQueue: MyFunction[] = []

  constructor(exe: MyFunction) {
    const resolve = (value: any) => {
      const doResolve = () => {
        if (this.status === 'pending') {
          this.status = 'success'
          this.value = value

          while (this.successQueue.length) {
            const cb = this.successQueue.shift()

            cb && cb(this.value)
          }
        }
      }

      setTimeout(doResolve, 0)
    }

    const reject = (value: any) => {
      const doReject = () => {
        if (this.status === 'pending') {
          this.status = 'failure'
          this.value = value

          while (this.failureQueue.length) {
            const cb = this.failureQueue.shift()

            cb && cb(this.value)
          }
        }
      }

      setTimeout(doReject, 0)
    }

    exe(resolve, reject)
  }

  then(
    success: MyFunction = (value: any) => value,
    failure: MyFunction = (value: any) => value
  ) {
    return new MyPromise((resolve: MyFunction, reject: MyFunction) => {
      const successFn = (value: any) => {
        try {
          const res = success(value)

          return res instanceof MyPromise
            ? res.then(resolve, reject)
            : resolve(res)
        } catch (err) {
          reject(err)
        }
      }

      const failureFn = (value: any) => {
        try {
          const res = failure(value)

          return res instanceof MyPromise
            ? res.then(resolve, reject)
            : resolve(res)
        } catch (err) {
          reject(err)
        }
      }

      if (this.status === 'pending') {
        this.successQueue.push(successFn)
        this.failureQueue.push(failureFn)
      } else if (this.status === 'success') {
        success(this.value)
      } else {
        failure(this.value)
      }
    })
  }

  catch(failure: MyFunction = (value) => value) {
    return this.then(() => null, failure)
  }
}
