import { action } from 'storybook/actions'
import DeepOptional from '../../../packages/js-utils/src/DeepOptional'

const edgeCaseDemo = () => {
  action('DeepOptional - 边界情况')({
    说明: '验证 DeepOptional 的边界情况',
    空值测试: (() => { try { return DeepOptional() } catch(e) { return e.message } })(),
  })
}

export default edgeCaseDemo
