export interface Options {
  column: number // 每行至多多少列 0代表 一行无限
  currentFrame: number // 当前帧数
  width: number // element 宽度
  height: number // element 高度
}

export interface Result {
  top: number // 当前帧 左上角 top
  left: number //  当前帧 左上角 left
}

/**
 * 获取 当前帧数的位置信息
 * @param options
 */
export default function getPosition(options: Options): Result {
  const { column, currentFrame, width, height } = options

  if (column !== 0) {
    const y = Math.ceil(currentFrame / column)
    const x = (currentFrame - 1) % column

    const currentTop = (y - 1) * height
    const currentLeft = x * width

    return {
      top: currentTop,
      left: currentLeft,
    }
  } else {
    const currentLeft = (currentFrame - 1) * width

    return {
      top: 0,
      left: currentLeft,
    }
  }
}
