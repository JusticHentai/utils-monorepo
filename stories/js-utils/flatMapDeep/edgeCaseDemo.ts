import { action } from 'storybook/actions'
import flatMapDeep from '../../../packages/js-utils/src/flatMapDeep'

const edgeCaseDemo = () => {
  action('flatMapDeep - 边界情况')({
    说明: '验证 flatMapDeep 的边界情况',
    空值测试: (() => { try { return flatMapDeep() } catch(e) { return e.message } })(),
  })
}

export default edgeCaseDemo
