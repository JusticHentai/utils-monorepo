import { action } from 'storybook/actions'
import propertyOf from '../../../packages/js-utils/src/propertyOf'

const edgeCaseDemo = () => {
  action('propertyOf - 边界情况')({
    说明: '验证 propertyOf 的边界情况',
    空值测试: (() => { try { return propertyOf() } catch(e) { return e.message } })(),
  })
}

export default edgeCaseDemo
