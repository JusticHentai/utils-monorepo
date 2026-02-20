import { action } from 'storybook/actions'
import delay from '../../../packages/js-utils/src/delay'

const edgeCaseDemo = () => {
  delay((text) => { action('delay - 边界情况')({ 参数: text, 说明: '延迟200ms执行' }) }, 200, '延迟完成')
}

export default edgeCaseDemo
