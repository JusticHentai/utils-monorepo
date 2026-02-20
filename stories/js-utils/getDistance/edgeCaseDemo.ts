import { action } from 'storybook/actions'
import getDistance from '../../../packages/js-utils/src/getDistance'

const edgeCaseDemo = () => {
  action('getDistance - 边界情况')({
    说明: '验证 getDistance 的边界情况',
    空值测试: (() => { try { return getDistance() } catch(e) { return e.message } })(),
  })
}

export default edgeCaseDemo
