import { action } from 'storybook/actions'
import eq from '../../../packages/js-utils/src/eq'

const edgeCaseDemo = () => {
  action('eq - 边界情况')({
    'NaN vs NaN': eq(NaN, NaN),
    '0 vs -0': eq(0, -0),
    'null vs undefined': eq(null, undefined),
    'null vs null': eq(null, null),
    "1 vs '1'": eq(1, '1'),
    '引用相同对象': eq(Object, Object),
    '不同对象字面量': eq({}, {}),
  })
}

export default edgeCaseDemo
