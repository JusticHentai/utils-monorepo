import { action } from 'storybook/actions'
import findKey, { findLastKey } from '../../../packages/js-utils/src/findKey'

const basicDemo = () => {
  const objects = {
    '0': { a: 0, b: 0 },
    '1': { a: 1, b: 1 },
    '2': { a: 2, b: 2 },
  }

  // 返回匹配的键名
  action('findKey - 返回匹配键名')(
    findKey(objects, (obj) => Boolean((obj as any).a)),
  )

  // 找不到返回 undefined
  action('findKey - 找不到返回 undefined')(
    findKey(objects, (obj) => (obj as any).a === 3),
  )

  // findLastKey: 从后往前找
  action('findLastKey - 从后查找')(
    findLastKey(objects, (obj) => Boolean((obj as any).b)),
  )
}

export default basicDemo
