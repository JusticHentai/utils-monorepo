import { sleep } from '@justichentai/js-utils'

const getFps = async () => {
  let fps = 0

  const startTime = Date.now()

  const frameHandler = () => {
    const now = Date.now()

    if (now - startTime >= 1000) {
      return
    }

    fps++
    requestAnimationFrame(frameHandler)
  }

  requestAnimationFrame(frameHandler)

  await sleep(1100)

  return fps
}

export default getFps
