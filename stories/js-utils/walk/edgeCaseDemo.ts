import { action } from 'storybook/actions'
import walk from '../../../packages/js-utils/src/walk'

const edgeCaseDemo = () => {
  action('walk - 边界情况')({
    说明: '验证 walk 的边界情况',
    空值测试: (() => { try { return walk() } catch(e) { return e.message } })(),
  })
}

export default edgeCaseDemo
