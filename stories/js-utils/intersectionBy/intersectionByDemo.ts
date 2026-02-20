import { action } from 'storybook/actions'
import intersectionBy from '../../../packages/js-utils/src/intersectionBy'

const intersectionByDemo = () => {
  action('intersectionBy 演示')({
    'Math.floor 交集': intersectionBy([2.1, 1.2], [2.3, 3.4], Math.floor),
  })
}

export default intersectionByDemo
