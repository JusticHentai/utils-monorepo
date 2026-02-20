import { action } from 'storybook/actions'
import uniqWith from '../../../packages/js-utils/src/uniqWith'
import isEqual from '../../../packages/js-utils/src/isEqual'

const uniqWithDemo = () => {
  // 深度比较去重
  const objects = [
    { x: 1, y: 2 },
    { x: 2, y: 1 },
    { x: 1, y: 2 },
  ]
  action('uniqWith - 深度比较去重')({
    输入: objects,
    结果: uniqWith(objects, isEqual),
  })
}

export default uniqWithDemo
