import { action } from 'storybook/actions'
import bindKey from '../../../packages/js-utils/src/bindKey'

const bindKeyDemo = () => {
  const object = { user: 'fred', greet(greeting) { return greeting + ' ' + this.user } }
  const bound = bindKey(object, 'greet', 'hi')
  action('bindKey 演示')({ 'bound()': bound() })
}

export default bindKeyDemo
