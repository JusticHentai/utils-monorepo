import { action } from 'storybook/actions'
import toStringValue from '../../../packages/js-utils/src/toStringValue'

const edgeCaseDemo = () => {
  action('toStringValue - 边界情况')({
    'null': toStringValue(null), '数组': toStringValue([1, 2, 3]), '数字': toStringValue(-0), 'Symbol': toStringValue(Symbol('a'))
  })
}

export default edgeCaseDemo
