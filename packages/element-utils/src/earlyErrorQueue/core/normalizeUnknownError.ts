import safeStringify from '../../safeStringify'
import truncateText from '../../truncateText'
import {
  DEFAULT_EARLY_ERROR_MAX_MESSAGE_LENGTH,
  DEFAULT_EARLY_ERROR_MAX_STACK_LENGTH,
} from '../interface'

export interface NormalizedUnknownError {
  /** 错误名称 */
  name?: string
  /** 错误消息 */
  message: string
  /** 错误堆栈 */
  stack?: string
  /** 原始类型 */
  reasonType: string
}

/** 标准化未知错误原因 */
const normalizeUnknownError = (
  value: unknown,
  maxMessageLength = DEFAULT_EARLY_ERROR_MAX_MESSAGE_LENGTH,
  maxStackLength = DEFAULT_EARLY_ERROR_MAX_STACK_LENGTH
): NormalizedUnknownError => {
  if (value instanceof Error) {
    return {
      name: value.name,
      message: truncateText(value.message, maxMessageLength),
      stack: truncateText(value.stack, maxStackLength),
      reasonType: 'error',
    }
  }

  if (typeof value === 'string') {
    return {
      message: truncateText(value, maxMessageLength),
      reasonType: 'string',
    }
  }

  if (value === null) {
    return {
      message: 'null',
      reasonType: 'null',
    }
  }

  if (typeof value === 'object') {
    return {
      message: truncateText(safeStringify(value), maxMessageLength),
      reasonType: 'object',
    }
  }

  return {
    message: truncateText(String(value), maxMessageLength),
    reasonType: typeof value,
  }
}

export default normalizeUnknownError
