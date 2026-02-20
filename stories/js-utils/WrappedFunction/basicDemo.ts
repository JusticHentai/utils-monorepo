import { action } from 'storybook/actions'
import type WrappedFunction from '../../../packages/js-utils/src/WrappedFunction'

// 创建一个简单的日志包装函数
const createLoggedFunction = <Fn extends (...args: any[]) => Promise<any>>(
  fn: Fn,
  name: string
): WrappedFunction<Fn> => {
  return async (...args) => {
    console.log(`[${name}] 开始执行，参数:`, args)

    try {
      const result = await fn(...args)
      console.log(`[${name}] 执行成功，结果:`, result)
      return [result, undefined]
    } catch (error) {
      console.log(`[${name}] 执行失败，错误:`, error)
      return [undefined, error]
    }
  }
}

const basicDemo = async () => {
  // 原始异步函数
  const calculateSum = async (a: number, b: number) => {
    await new Promise((resolve) => setTimeout(resolve, 100)) // 模拟异步操作
    return a + b
  }

  const divide = async (a: number, b: number) => {
    if (b === 0) {
      throw new Error('除数不能为零')
    }
    return a / b
  }

  // 创建包装函数
  const loggedSum = createLoggedFunction(calculateSum, 'Sum')
  const loggedDivide = createLoggedFunction(divide, 'Divide')

  // 测试成功情况
  const [sumResult, sumError] = await loggedSum(10, 20)
  action('加法结果')({ result: sumResult, error: sumError })

  // 测试正常除法
  const [divideResult, divideError] = await loggedDivide(10, 2)
  action('除法结果')({ result: divideResult, error: divideError })

  // 测试除零错误
  const [errorResult, errorError] = await loggedDivide(10, 0)
  action('除零错误')({ result: errorResult, error: errorError })
}

export default basicDemo
