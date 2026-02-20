import { action } from 'storybook/actions'
import repeat from '../../../packages/js-utils/src/repeat'

const edgeCaseDemo = () => {
  action('repeat - 边界情况')({
    'abc重复3次': repeat('abc', 3), '空字符串': repeat('', 3), '重复0次': repeat('abc', 0), '重复1次': repeat('abc', 1)
  })
}

export default edgeCaseDemo
