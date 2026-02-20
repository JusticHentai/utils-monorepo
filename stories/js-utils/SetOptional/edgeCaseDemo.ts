import { action } from 'storybook/actions'
import SetOptional from '../../../packages/js-utils/src/SetOptional'

const edgeCaseDemo = () => {
  action('SetOptional - 边界情况')({
    说明: '验证 SetOptional 的边界情况',
    空值测试: (() => { try { return SetOptional() } catch(e) { return e.message } })(),
  })
}

export default edgeCaseDemo
