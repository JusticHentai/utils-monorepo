import { action } from 'storybook/actions'
import updateWith from '../../../packages/js-utils/src/updateWith'

const edgeCaseDemo = () => {
  action('updateWith - 边界情况')({
    '自定义': updateWith({}, '[0][1]', () => 'a', Object)
  })
}

export default edgeCaseDemo
