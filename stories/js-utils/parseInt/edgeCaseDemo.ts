import { action } from 'storybook/actions'
import parseInt from '../../../packages/js-utils/src/parseInt'

const edgeCaseDemo = () => {
  action('parseInt - 边界情况')({
    说明: '验证 parseInt 的边界情况',
    空值测试: (() => { try { return parseInt() } catch(e) { return e.message } })(),
  })
}

export default edgeCaseDemo
