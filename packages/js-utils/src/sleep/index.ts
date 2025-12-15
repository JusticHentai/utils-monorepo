/**
 * 睡眠函数
 * @param time 睡眠时间，单位：毫秒
 * @returns 睡眠后的 Promise
 */
const sleep = (time: number): Promise<void> =>
  new Promise((resolve) => setTimeout(resolve, time))

export default sleep
