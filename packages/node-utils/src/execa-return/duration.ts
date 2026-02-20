import { hrtime } from 'node:process'

/**
 * 在生成子进程之前开始计时
 */
export const getStartTime = (): bigint => hrtime.bigint()

/**
 * 计算子进程结束后的持续时间
 * 用于 verbose 选项打印
 * @param startTime - 开始时间
 */
export const getDurationMs = (startTime: bigint): number =>
  Number(hrtime.bigint() - startTime) / 1e6
