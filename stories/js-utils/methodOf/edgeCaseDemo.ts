import { action } from 'storybook/actions'
import methodOf from '../../../packages/js-utils/src/methodOf'

const edgeCaseDemo = () => {
  action('methodOf - 边界情况')({
    说明: '验证 methodOf 的边界情况',
    空值测试: (() => { try { return methodOf() } catch(e) { return e.message } })(),
  })
}

export default edgeCaseDemo
