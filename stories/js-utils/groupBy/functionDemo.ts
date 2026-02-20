import { action } from 'storybook/actions'
import groupBy from '../../../packages/js-utils/src/groupBy'

const functionDemo = () => {
  const array = [6.1, 4.2, 6.3]

  // 按函数返回值分组
  action('groupBy - Math.floor 分组')(
    groupBy(array, Math.floor),
  )

  // 按属性名分组（字符串 shorthand）
  action('groupBy - 属性名分组')(
    groupBy(['one', 'two', 'three'], (s) => s.length),
  )

  // hasOwnProperty / constructor 作为 key 不冲突
  action('groupBy - 特殊 key 名不冲突')(
    groupBy(array, (n) =>
      Math.floor(n) > 4 ? 'hasOwnProperty' : 'constructor',
    ),
  )
}

export default functionDemo
