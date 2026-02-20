import { useEffect, useState } from 'react'

import useDebounce from '../useDebounce'
import type { UseDebounceOptions } from '../useDebounce/interface'

/**
 * 用来处理值防抖的 Hook
 * @param value - 需要防抖的值
 * @param options - 防抖配置选项
 * @returns 防抖后的值
 */
const useDebounceValue = <T>(value: T, options: UseDebounceOptions) => {
  const [debounced, setDebounced] = useState(value)

  const { run } = useDebounce(() => {
    setDebounced(value)
  }, options)

  useEffect(() => {
    run()
  }, [value])

  return debounced
}

export default useDebounceValue
