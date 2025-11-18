export interface Options {
  /**
   * 初始时间戳 单位 ms
   */
  initialTime: number
  /**
   * 初始帧数
   */
  initialFrame: number
  /**
   * 帧动画总持续时间 单位 ms
   */
  duration: number
  /**
   * 帧动画总帧数
   */
  frameCount: number
}

const calcCurrentFrame = (options: Options) => {
  const { initialTime, initialFrame, duration, frameCount } = options

  // 获取每帧距离上次 start 的时间差
  const currentTime = Date.now() - initialTime

  // 帧数 = 向下取整(时间差 / 每帧时间) + 初始帧数
  const currentFrame =
    Math.floor(currentTime / (duration / frameCount)) + initialFrame

  const nextFrame = currentFrame % frameCount // 帧数从 0 开始好算，当前帧 % 总帧数 = 当前帧数, 0 % 5 = 0, 5 % 5 = 0

  /**
   * 次数从 0 开始算比较合理
   * 当前播完次数 = 向下取整(帧数  / 总帧数)
   * 6 / 5 = 1, 播到一半不算播完
   */
  const completedTimes = Math.floor(currentFrame / frameCount)

  return {
    nextFrame,
    completedTimes,
  }
}

export default calcCurrentFrame
