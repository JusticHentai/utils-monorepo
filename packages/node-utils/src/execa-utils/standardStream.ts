import process from 'node:process'
import type { Readable, Writable } from 'node:stream'

/**
 * 标准流数组
 */
export const STANDARD_STREAMS = [process.stdin, process.stdout, process.stderr] as const

/**
 * 标准流别名
 */
export const STANDARD_STREAMS_ALIASES = ['stdin', 'stdout', 'stderr'] as const

/**
 * 检查流是否为标准流
 * @param stream - 要检查的流
 */
export const isStandardStream = (stream: Readable | Writable): boolean =>
  (STANDARD_STREAMS as readonly (Readable | Writable)[]).includes(stream)

/**
 * 获取流名称
 * @param fdNumber - 文件描述符编号
 */
export const getStreamName = (fdNumber: number): string =>
  STANDARD_STREAMS_ALIASES[fdNumber] ?? `stdio[${fdNumber}]`
