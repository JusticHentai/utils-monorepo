import { action } from 'storybook/actions'
import toPairs from '../../../packages/js-utils/src/toPairs'

const edgeCaseDemo = () => {
  action('toPairs - 边界情况')({
    '正常': toPairs({ a: 1, b: 2 }), '空对象': toPairs({})
  })
}

export default edgeCaseDemo
