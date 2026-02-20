import { action } from 'storybook/actions'
import values from '../../../packages/js-utils/src/values'

const edgeCaseDemo = () => {
  action('values - 边界情况')({
    '测试': values({})
  })
}

export default edgeCaseDemo
