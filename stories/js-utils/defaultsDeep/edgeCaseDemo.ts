import { action } from 'storybook/actions'
import defaultsDeep from '../../../packages/js-utils/src/defaultsDeep'

const edgeCaseDemo = () => {
  action('defaultsDeep - 边界情况')({
    '深层默认': defaultsDeep({ a: { b: 2 } }, { a: { b: 1, c: 3 } }), '空对象': defaultsDeep({}, { a: 1 })
  })
}

export default edgeCaseDemo
