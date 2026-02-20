import { action } from 'storybook/actions'
import clamp from '../../../packages/js-utils/src/clamp'

const edgeCaseDemo = () => {
  // 只有 max（无 min）
  action('clamp - 只限制最大值')({
    'value=5, max=3': clamp({ value: 5, max: 3 }),
    'value=1, max=3': clamp({ value: 1, max: 3 }),
  })

  // 只有 min（无 max）
  action('clamp - 只限制最小值')({
    'value=-5, min=0': clamp({ value: -5, min: 0 }),
    'value=5, min=0': clamp({ value: 5, min: 0 }),
  })

  // 小数
  action('clamp - 小数处理')({
    'value=-10.2, min=-5.5, max=5.5': clamp({ value: -10.2, min: -5.5, max: 5.5 }),
    'value=10.6, min=-5.6, max=5.4': clamp({ value: 10.6, min: -5.6, max: 5.4 }),
  })

  // min > max 时自动交换
  action('clamp - min > max 自动交换')({
    'value=3, min=5, max=0': clamp({ value: 3, min: 5, max: 0 }),
    说明: '自动将 min=5, max=0 调整为 lower=0, upper=5',
  })
}

export default edgeCaseDemo
