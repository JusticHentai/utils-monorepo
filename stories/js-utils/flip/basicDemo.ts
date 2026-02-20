import { action } from 'storybook/actions'
import flip from '../../../packages/js-utils/src/flip'

const basicDemo = () => {
  const fn = (...args: unknown[]) => args

  // 翻转参数顺序
  const flipped = flip(fn)
  action('flip - 翻转参数顺序')({
    'fn("a","b","c","d")': fn('a', 'b', 'c', 'd'),
    'flipped("a","b","c","d")': flipped('a', 'b', 'c', 'd'),
  })

  // 实际应用：翻转比较函数
  const divide = (a: number, b: number) => a / b
  const flippedDivide = flip(divide)
  action('flip - 翻转除法参数')({
    'divide(10, 2)': divide(10, 2),
    'flippedDivide(10, 2)': flippedDivide(10, 2),
  })
}

export default basicDemo
