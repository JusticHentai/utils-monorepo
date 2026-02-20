import { action } from 'storybook/actions'
import uniqueId from '../../../packages/js-utils/src/uniqueId'

const edgeCaseDemo = () => {
  action('uniqueId - 边界情况')({
    '默认前缀': uniqueId(), '自定义前缀': uniqueId('user_'), '连续调用': uniqueId('id_')
  })
}

export default edgeCaseDemo
