import { action } from 'storybook/actions'
import flatMapDepth from '../../../packages/js-utils/src/flatMapDepth'

const edgeCaseDemo = () => {
  action('flatMapDepth - 边界情况')({
    说明: '验证 flatMapDepth 的边界情况',
    空值测试: (() => { try { return flatMapDepth() } catch(e) { return e.message } })(),
  })
}

export default edgeCaseDemo
