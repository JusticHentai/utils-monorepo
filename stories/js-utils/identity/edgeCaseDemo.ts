import { action } from 'storybook/actions'
import identity from '../../../packages/js-utils/src/identity'

const edgeCaseDemo = () => {
  action('identity - 边界情况')({
    '数字': identity(1), '对象': identity({ a: 1 }), 'null': identity(null), '函数': typeof identity(() => {})
  })
}

export default edgeCaseDemo
