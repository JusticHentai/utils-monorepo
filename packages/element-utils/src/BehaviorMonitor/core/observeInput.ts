import { truncate as truncateFn } from '@justichentai/js-utils'
import createEventListener from '../../createEventListener'
import getElementInfo from '../../getElementInfo'
import { DEFAULT_MAX_LENGTH } from '../../getElementInfo/interface'
import type {
  BehaviorCallback,
  ObserveInputOptions,
  StopListening,
} from '../interface'
import {
  BEHAVIOR_TYPE,
  DEFAULT_SENSITIVE_FIELDS,
  PASSWORD_INPUT_TYPE,
} from '../interface'

/**
 * 监控输入行为
 * @param callback - 输入事件回调函数
 * @param options - 配置选项
 * @returns 停止监听函数
 */
const observeInput = (
  callback: BehaviorCallback,
  options?: ObserveInputOptions
): StopListening => {
  const {
    recordValue = false,
    sensitiveFields = DEFAULT_SENSITIVE_FIELDS,
    throttleMs = 500,
  } = options || {}

  const inputTimers = new WeakMap<Element, ReturnType<typeof setTimeout>>()

  const handler = (event: Event) => {
    const target = event.target as HTMLInputElement | HTMLTextAreaElement
    if (!target || !target?.value) return

    // 节流处理
    const existingTimer = inputTimers.get(target)
    if (existingTimer) {
      clearTimeout(existingTimer)
    }

    const timer = setTimeout(() => {
      // 检查是否是敏感字段
      const isSensitive =
        target.type === PASSWORD_INPUT_TYPE ||
        sensitiveFields.some(
          (field) =>
            target.name?.toLowerCase().includes(field) ||
            target.id?.toLowerCase().includes(field)
        )

      callback({
        type: BEHAVIOR_TYPE.INPUT,
        timestamp: Date.now(),
        pageUrl: window.location.href,
        target: getElementInfo(target),
        data: {
          inputType: target.type || 'text',
          value:
            recordValue && !isSensitive
              ? truncateFn({
                  str: target.value,
                  maxLength: DEFAULT_MAX_LENGTH,
                })
              : undefined,
          length: target.value.length,
        },
      })

      inputTimers.delete(target)
    }, throttleMs)

    inputTimers.set(target, timer)
  }

  return createEventListener(document, 'input', handler)
}

export default observeInput
