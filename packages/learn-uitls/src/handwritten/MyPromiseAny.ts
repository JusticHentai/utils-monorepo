export default function myPromiseAny(promises: Promise<any>[]) {
  if (!promises.length) {
    Promise.reject(new AggregateError('No Promise in Promise.any was resolved'))
  }

  return new Promise((resolve, reject) => {
    const result = []
    let num = 0

    promises.forEach((item: any, i: number) => {
      Promise.resolve(item).then(
        (res) => {
          resolve(res)
        },
        (err) => {
          result[i] = err
          num++

          if (num === promises.length) {
            reject(new AggregateError('No Promise in Promise.any was resolved'))
          }
        }
      )
    })
  })
}
