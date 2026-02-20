import { useEffect, useRef } from 'react'

/**
 * 返回当前最新值的 ref，可以避免闭包问题
 * @param value - 需要获取最新值的变量
 * @returns 包含最新值的 ref 对象
 */
const useLatest = <T>(value: T) => {
  const ref = useRef(value)

  useEffect(() => {
    ref.current = value
  })

  return ref
}

export default useLatest
