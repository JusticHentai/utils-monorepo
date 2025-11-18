interface Options {
  imageElement: HTMLImageElement
  frameCount: number
  rowCount: number
}

/**
 * 帧状态计算
 * 计算每帧的宽度、高度，以及对应位置
 * 列数 =（帧数 / 行数）取整，例如 11 帧，2 行，则一行有 6 个，最后一个位置是空
 * 图片宽度 = 总宽度 / 列数
 * 图片高度 = 总高度 / 行数
 */
const calcFrameState = (options: Options) => {
  const { imageElement, frameCount, rowCount } = options

  const columnCount = Math.ceil(frameCount / rowCount)
  const width = imageElement.width / columnCount
  const height = imageElement.height / rowCount

  const frameList: Array<{
    left: number
    top: number
  }> = []

  // 计算左上角位置，从 0 开始好算
  for (let i = 0; i < frameCount; i++) {
    const left = (i % columnCount) * width
    const top = Math.floor(i / columnCount) * height

    frameList.push({
      left,
      top,
    })
  }

  return {
    width,
    height,
    frameList,
  }
}

export default calcFrameState
