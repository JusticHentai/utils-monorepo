import { action } from 'storybook/actions'
import Point from '../../../packages/js-utils/src/Point'

const edgeCaseDemo = () => {
  action('Point - 边界情况')({
    说明: '验证 Point 的边界情况',
    空值测试: (() => { try { return Point() } catch(e) { return e.message } })(),
  })
}

export default edgeCaseDemo
