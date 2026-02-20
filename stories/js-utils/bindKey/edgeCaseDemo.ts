import { action } from 'storybook/actions'
import bindKey from '../../../packages/js-utils/src/bindKey'

const edgeCaseDemo = () => {
  const obj = { name: 'fred', greet(greeting) { return greeting + ' ' + this.name } }
  const bound = bindKey(obj, 'greet', 'hi')
  action('bindKey - 边界情况')({
    '绑定方法调用': bound(),
  })
}

export default edgeCaseDemo
