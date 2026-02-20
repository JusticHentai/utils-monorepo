import { action } from 'storybook/actions'
import pickBy from '../../../packages/js-utils/src/pickBy'

const edgeCaseDemo = () => {
  action('pickBy - 边界情况')({
    '测试': pickBy({})
  })
}

export default edgeCaseDemo
