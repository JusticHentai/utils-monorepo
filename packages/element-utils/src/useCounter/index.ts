import { useState } from 'react'

import clamp from '@justichentai/js-utils/clamp'

import { isNumber } from '../isNumber'
import useMemoizedFn from '../useMemoizedFn'
import type { UseCounterOptions, ValueParam } from './interface'

export type { CounterActions, UseCounterOptions, ValueParam } from './interface'

/**
 * 管理计数器的 Hook
 * @param initialValue - 初始值，默认为 0
 * @param options - 配置选项，包含 min 和 max
 * @returns [当前值, 操作方法]
 */
const useCounter = (
  initialValue: number = 0,
  options: UseCounterOptions = {}
) => {
  const { min, max } = options

  const [current, setCurrent] = useState(() => {
    return clamp({ value: initialValue, min, max })
  })

  const setValue = (value: ValueParam) => {
    setCurrent((c) => {
      const target = isNumber(value) ? value : value(c)
      return clamp({ value: target, min, max })
    })
  }

  const inc = (delta: number = 1) => {
    setValue((c) => c + delta)
  }

  const dec = (delta: number = 1) => {
    setValue((c) => c - delta)
  }

  const set = (value: ValueParam) => {
    setValue(value)
  }

  const reset = () => {
    setValue(initialValue)
  }

  return [
    current,
    {
      inc: useMemoizedFn(inc),
      dec: useMemoizedFn(dec),
      set: useMemoizedFn(set),
      reset: useMemoizedFn(reset),
    },
  ] as const
}

export default useCounter
