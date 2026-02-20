import { action } from 'storybook/actions'
import now from '../../../packages/js-utils/src/now'

const edgeCaseDemo = () => {
  action('now - 边界情况')({
    '时间戳': now(), '类型': typeof now()
  })
}

export default edgeCaseDemo
