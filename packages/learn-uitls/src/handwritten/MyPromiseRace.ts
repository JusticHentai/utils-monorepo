export default function myPromiseRace(promises: Promise<any>[]) {
  return new Promise((resolve, reject) => {
    for (const item of promises) {
      item.then(resolve, reject)
    }
  })
}
