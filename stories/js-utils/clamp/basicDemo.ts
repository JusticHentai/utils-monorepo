import { action } from 'storybook/actions'
import clamp from '../../../packages/js-utils/src/clamp'

const basicDemo = () => {
  // 范围内的值不变
  action('clamp - 范围内不变')({
    'value=4, min=-5, max=5': clamp({ value: 4, min: -5, max: 5 }),
    'value=-4, min=-5, max=5': clamp({ value: -4, min: -5, max: 5 }),
    'value=0, min=-5, max=5': clamp({ value: 0, min: -5, max: 5 }),
    'value=5(边界), min=-5, max=5': clamp({ value: 5, min: -5, max: 5 }),
    'value=-5(边界), min=-5, max=5': clamp({ value: -5, min: -5, max: 5 }),
  })

  // 超出范围被限制
  action('clamp - 超出范围被限制')({
    'value=10, max=5': clamp({ value: 10, min: -5, max: 5 }),
    'value=-10, min=-5': clamp({ value: -10, min: -5, max: 5 }),
    'value=Infinity, max=5': clamp({ value: Infinity, min: -5, max: 5 }),
    'value=-Infinity, min=-5': clamp({ value: -Infinity, min: -5, max: 5 }),
  })
}

export default basicDemo
