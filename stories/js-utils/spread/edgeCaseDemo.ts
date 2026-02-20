import { action } from 'storybook/actions'
import spread from '../../../packages/js-utils/src/spread'

const edgeCaseDemo = () => {
  const say = spread((who, what) => who + ' says ' + what)
  action('spread - 边界情况')({
    '正常': say(['fred', 'hello']),
    '空数组': say([]),
  })
}

export default edgeCaseDemo
