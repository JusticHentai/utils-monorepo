import { action } from 'storybook/actions'
import noop from '../../../packages/js-utils/src/noop'

const edgeCaseDemo = () => {
  action('noop - 边界情况')({
    '返回undefined': noop(), '传参': noop(1, 2, 3)
  })
}

export default edgeCaseDemo
