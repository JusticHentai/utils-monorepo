import { action } from 'storybook/actions'
import bindAll from '../../../packages/js-utils/src/bindAll'

const edgeCaseDemo = () => {
  const obj = { name: 'fred', greet() { return 'hi ' + this.name } }
  bindAll(obj, ['greet'])
  const fn = obj.greet
  action('bindAll - 边界情况')({
    '绑定后独立调用': fn(),
    说明: 'this 仍指向 obj',
  })
}

export default edgeCaseDemo
