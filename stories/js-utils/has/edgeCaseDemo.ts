import { action } from 'storybook/actions'
import has from '../../../packages/js-utils/src/has'

const edgeCaseDemo = () => {
  action('has - 边界情况')({
    '存在': has({ a: { b: 1 } }, 'a.b'), '不存在': has({ a: 1 }, 'b'), '空对象': has({}, 'a')
  })
}

export default edgeCaseDemo
