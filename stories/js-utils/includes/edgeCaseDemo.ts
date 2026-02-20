import { action } from 'storybook/actions'
import includes from '../../../packages/js-utils/src/includes'

const edgeCaseDemo = () => {
  action('includes - 边界情况')({
    '数组包含': includes([1, 2, 3], 1), '字符串包含': includes('abcd', 'bc'), '不包含': includes([1, 2], 3), '指定起始': includes([1, 2, 3], 1, 2)
  })
}

export default edgeCaseDemo
