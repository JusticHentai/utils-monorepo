import { action } from 'storybook/actions'
import ceil from '../../../packages/js-utils/src/ceil'

const ceilDemo = () => {
  action('ceil 演示')({ '4.006': ceil(4.006), '6.004精度2': ceil(6.004, 2), '6040精度-2': ceil(6040, -2) })
}

export default ceilDemo
