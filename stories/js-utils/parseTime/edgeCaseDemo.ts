import { action } from 'storybook/actions'
import parseTime from '../../../packages/js-utils/src/parseTime'

const edgeCaseDemo = () => {
  action('parseTime - 边界情况')({
    说明: '验证 parseTime 的边界情况',
    空值测试: (() => { try { return parseTime() } catch(e) { return e.message } })(),
  })
}

export default edgeCaseDemo
