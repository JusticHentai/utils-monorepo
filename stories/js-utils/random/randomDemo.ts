import { action } from 'storybook/actions'
import random from '../../../packages/js-utils/src/random'

const randomDemo = () => {
  // 基本范围 (lodash: random(5, 10) => 5~9之间整数)
  const result = random(1, 10)
  action('random - 1到10之间')(result)

  // 范围验证: 结果 >= min 且 < max
  const r = random(5, 10)
  action('random - 范围验证')({
    result: r,
    inRange: r >= 5 && r < 10,
  })

  // 多次调用产生不同结果
  const results = Array.from({ length: 10 }, () => random(0, 100))
  action('random - 10次调用')(results)

  // 小范围
  const small = Array.from({ length: 5 }, () => random(0, 2))
  action('random - 小范围0到2')(small)

  // 负数范围
  action('random - 负数范围')(random(-10, -1))
}

export default randomDemo