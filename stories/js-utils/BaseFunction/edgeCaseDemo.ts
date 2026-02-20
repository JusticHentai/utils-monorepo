import { action } from 'storybook/actions'
import BaseFunction from '../../../packages/js-utils/src/BaseFunction'

const edgeCaseDemo = () => {
  action('BaseFunction - 边界情况')({
    说明: '验证 BaseFunction 的边界情况',
    空值测试: (() => { try { return BaseFunction() } catch(e) { return e.message } })(),
  })
}

export default edgeCaseDemo
