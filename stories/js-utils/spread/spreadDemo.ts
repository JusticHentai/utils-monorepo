import { action } from 'storybook/actions'
import spread from '../../../packages/js-utils/src/spread'

const spreadDemo = () => {
  const say = spread((who, what) => who + ' says ' + what)
  action('spread 演示')({ '展开参数调用': say(['fred', 'hello']) })
}

export default spreadDemo
