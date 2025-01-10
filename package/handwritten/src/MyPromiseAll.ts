export default function myPromiseAll(promisies: Promise<any>[]) {
  return new Promise((resolve, reject) => {
    const res: any[] = []
    let count = 0
    const length = promisies.length

    promisies.forEach((item: any, i: number) => {
      Promise.resolve(item)
        .then((myRes) => {
          count += 1
          res[i] = myRes

          if (count === length) {
            resolve(res)
          }
        })
        .catch(reject)
    })
  })
}
