export default function myPromiseAllSettled(promise: Promise<any>[]) {
  if (!promise.length) {
    return Promise.resolve([])
  }

  return new Promise((resolve) => {
    const result: { status: 'fulfilled' | 'rejected'; value: any }[] = []
    let num = 0
    const length = promise.length

    promise.forEach((item: Promise<any>, i: number) => {
      Promise.resolve(item).then(
        (res) => {
          result[i] = { status: 'fulfilled', value: res }
          num++

          if (num === length) {
            resolve(result)
          }
        },
        (err) => {
          result[i] = { status: 'rejected', value: err }
          num++

          if (num === length) {
            resolve(result)
          }
        }
      )
    })
  })
}
