import { action } from 'storybook/actions'
import { unionBy, unionWith } from '../../../packages/js-utils/src/union'

const unionByDemo = () => {
  action('unionBy - 取整去重')(
    unionBy([[1.1, 2.3], [2.4, 3.1]], Math.floor)
  )

  action('unionWith - 自定义比较')(
    unionWith(
      [[{ x: 1 }, { x: 2 }], [{ x: 2 }, { x: 3 }]],
      (a, b) => a.x === b.x
    )
  )
}

export default unionByDemo
