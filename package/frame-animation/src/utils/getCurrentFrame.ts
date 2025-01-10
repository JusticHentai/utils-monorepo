export interface Options {
  initialTime: number // 初始时间
  initialFrame: number // 初始帧数
  duration: number // 帧动画总持续时间
  frame: number // 帧动画总帧数
}

/**
 * 获取当前帧数下标
 * @param options
 */
export default function getCurrentFrame(options: Options): number {
  const { initialTime, initialFrame, duration, frame } = options

  const currentTime = Date.now() - initialTime // 每次重置后 的 当前总时间
  const currentFrame =
    Math.floor(currentTime / (duration / frame)) + initialFrame // 当前总帧数

  return (currentFrame % frame) + 1 // 当前帧数
}
