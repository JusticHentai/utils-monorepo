import { action } from 'storybook/actions'
import getPosition from '../../../packages/js-utils/src/getPosition'

const edgeCaseDemo = () => {
  action('getPosition - 边界情况')({
    说明: '验证 getPosition 的边界情况',
    空值测试: (() => { try { return getPosition() } catch(e) { return e.message } })(),
  })
}

export default edgeCaseDemo
