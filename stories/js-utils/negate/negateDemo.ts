import { action } from 'storybook/actions'
import negate from '../../../packages/js-utils/src/negate'

const negateDemo = () => {
  // lodash 测试: 取反谓词结果
  const isEven = (n: number) => n % 2 === 0
  const isOdd = negate(isEven)

  action('negate - 基础取反')({
    'isOdd(1)': isOdd(1),
    'isOdd(2)': isOdd(2),
    说明: 'negate(isEven) 等价于 isOdd',
  })

  // lodash 测试: 多参数支持
  const numbers = [1, 2, 3, 4, 5, 6]
  action('negate - filter 过滤')({
    偶数: numbers.filter(isEven),
    奇数: numbers.filter(isOdd),
  })

  // 多参数函数
  const isGreater = (a: number, b: number) => a > b
  const isNotGreater = negate(isGreater)
  action('negate - 多参数')({
    'isGreater(3, 1)': isGreater(3, 1),
    'isNotGreater(3, 1)': isNotGreater(3, 1),
  })
}

export default negateDemo