import { action } from 'storybook/actions'
import xorBy from '../../../packages/js-utils/src/xorBy'
import xorWith from '../../../packages/js-utils/src/xorWith'

const xorByDemo = () => {
  action('xorBy - 取整')(
    xorBy([[1.1, 2.2], [2.3, 3.1]], Math.floor)
  )

  action('xorWith - 自定义比较')(
    xorWith(
      [[{ x: 1 }, { x: 2 }], [{ x: 2 }, { x: 3 }]],
      (a, b) => a.x === b.x
    )
  )
}

export default xorByDemo
