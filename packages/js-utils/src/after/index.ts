/**
 * 创建一个函数，只有在被调用 n 次后才会执行
 * @param n - 在执行前需要调用的次数
 * @param func - 要限制的函数
 * @returns 返回新的限制函数
 * @example
 * const saves = ['profile', 'settings']
 * const done = after(saves.length, () => console.log('Done saving!'))
 *
 * saves.forEach(type => asyncSave({ type, complete: done }))
 * // => 在两次保存完成后输出 'Done saving!'
 */
const after = <T extends (...args: unknown[]) => unknown>(
  n: number,
  func: T
): ((...args: Parameters<T>) => ReturnType<T> | undefined) => {
  let count = 0

  return (...args: Parameters<T>): ReturnType<T> | undefined => {
    count++
    if (count >= n) {
      return func(...args) as ReturnType<T>
    }
    return undefined
  }
}

export default after
