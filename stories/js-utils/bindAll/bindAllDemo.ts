import { action } from 'storybook/actions'
import bindAll from '../../../packages/js-utils/src/bindAll'

const bindAllDemo = () => {
  const view = { label: 'docs', click() { return 'clicked ' + this.label } }
  bindAll(view, ['click'])
  const { click } = view
  action('bindAll 演示')({ '解构后调用': click() })
}

export default bindAllDemo
