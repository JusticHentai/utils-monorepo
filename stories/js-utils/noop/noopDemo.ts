import { action } from 'storybook/actions'
import noop from '../../../packages/js-utils/src/noop'

const noopDemo = () => {
  const result = noop()
  action('noop - 返回值')(result)
  action('noop - 类型')(typeof noop)

  // 常用于默认回调
  function doSomething(callback = noop) {
    callback()
    return 'done'
  }

  action('noop - 默认回调')(doSomething())
}

export default noopDemo
