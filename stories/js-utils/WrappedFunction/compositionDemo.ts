import { action } from 'storybook/actions'
import WrappedFunction from '../../../packages/js-utils/src/WrappedFunction'

// 性能监控包装器
const createPerformanceWrapper = <Fn extends (...args: any[]) => Promise<any>>(
  fn: Fn
): WrappedFunction<Fn, { originalError: any; duration: number }> => {
  return async (...args) => {
    const startTime = performance.now()

    try {
      const result = await fn(...args)
      const duration = performance.now() - startTime
      console.log(`函数执行耗时: ${duration.toFixed(2)}ms`)
      return [result, undefined]
    } catch (error) {
      const duration = performance.now() - startTime
      return [undefined, { originalError: error, duration }]
    }
  }
}

// 缓存包装器
const createCacheWrapper = <Fn extends (...args: any[]) => Promise<any>>(
  fn: WrappedFunction<Fn>
): WrappedFunction<Fn> => {
  const cache = new Map<string, any>()

  return async (...args) => {
    const key = JSON.stringify(args)

    if (cache.has(key)) {
      console.log('缓存命中:', key)
      return [cache.get(key), undefined]
    }

    const [result, error] = await fn(...args)

    if (result !== undefined) {
      cache.set(key, result)
      console.log('结果已缓存:', key)
    }

    return [result, error]
  }
}

const compositionDemo = async () => {
  // 原始函数：模拟耗时的 API 调用
  const fetchUserData = async (userId: number) => {
    await new Promise((resolve) => setTimeout(resolve, 500)) // 模拟网络延迟

    if (userId <= 0) {
      throw new Error('无效的用户ID')
    }

    return {
      id: userId,
      name: `User ${userId}`,
      email: `user${userId}@example.com`,
    }
  }

  // 组合多个包装器：性能监控 + 缓存
  const performanceWrapped = createPerformanceWrapper(fetchUserData)
  const cachedAndMonitored = createCacheWrapper(performanceWrapped)

  // 第一次调用（无缓存）
  console.log('=== 第一次调用 ===')
  const [result1, error1] = await cachedAndMonitored(1)
  action('第一次调用')({ result: result1, error: error1 })

  // 第二次调用相同参数（命中缓存）
  console.log('=== 第二次调用（相同参数）===')
  const [result2, error2] = await cachedAndMonitored(1)
  action('第二次调用（缓存）')({ result: result2, error: error2 })

  // 调用不同参数
  console.log('=== 调用不同参数 ===')
  const [result3, error3] = await cachedAndMonitored(2)
  action('不同参数调用')({ result: result3, error: error3 })

  // 测试错误情况
  console.log('=== 错误情况 ===')
  const [result4, error4] = await cachedAndMonitored(-1)
  action('错误情况')({ result: result4, error: error4 })
}

export default compositionDemo
