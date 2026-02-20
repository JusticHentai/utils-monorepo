import { action } from 'storybook/actions'
import secondsToHHMMSS from '../../../packages/js-utils/src/secondsToHHMMSS'

const edgeCaseDemo = () => {
  action('secondsToHHMMSS - 边界情况')({
    说明: '验证 secondsToHHMMSS 的边界情况',
    空值测试: (() => { try { return secondsToHHMMSS() } catch(e) { return e.message } })(),
  })
}

export default edgeCaseDemo
