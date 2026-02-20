import { action } from 'storybook/actions'
import iteratee from '../../../packages/js-utils/src/iteratee'

const edgeCaseDemo = () => {
  action('iteratee - 边界情况')({
    说明: '验证 iteratee 的边界情况',
    空值测试: (() => { try { return iteratee() } catch(e) { return e.message } })(),
  })
}

export default edgeCaseDemo
