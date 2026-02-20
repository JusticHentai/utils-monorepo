import { action } from 'storybook/actions'
import setWith from '../../../packages/js-utils/src/setWith'

const edgeCaseDemo = () => {
  action('setWith - 边界情况')({
    '自定义创建': setWith({}, '[0][1]', 'a', Object), '使用Array': setWith({}, 'a[0]', 'b')
  })
}

export default edgeCaseDemo
