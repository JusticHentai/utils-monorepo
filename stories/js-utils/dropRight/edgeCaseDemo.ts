import { action } from 'storybook/actions'
import dropRight from '../../../packages/js-utils/src/dropRight'

const edgeCaseDemo = () => {
  action('dropRight - 边界情况')({
    '丢弃1个': dropRight([1,2,3]), '丢弃2个': dropRight([1,2,3], 2), '空数组': dropRight([]), '丢弃超过长度': dropRight([1,2], 5)
  })
}

export default edgeCaseDemo
