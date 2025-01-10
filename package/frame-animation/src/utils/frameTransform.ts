export interface Options {
  playState: boolean
  currentFrame: number
  frame: number
}

/**
 * 正倒放帧数转换器
 * @param options
 */
export default function frameTransform(options: Options): number {
  const { playState, currentFrame, frame } = options

  if (playState) {
    return currentFrame
  }

  return frame - currentFrame + 1
}
