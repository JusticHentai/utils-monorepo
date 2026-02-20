import { action } from 'storybook/actions'
import invert from '../../../packages/js-utils/src/invert'

const invertDemo = () => {
  // 基础反转
  const obj = { a: 1, b: 2 }
  const inverted = invert(obj)
  action('invert - 基础反转')({
    原始: obj,
    反转: inverted,
  })

  // 双重反转
  action('invert - 双重反转')(
    invert(inverted as any),
  )

  // Object.prototype 上的 key 值不冲突
  action('invert - 特殊值不冲突')(
    invert({ a: 'hasOwnProperty', b: 'constructor' } as any),
  )

  // length 属性
  action('invert - length 属性')(
    invert({ '0': 'a', '1': 'b', length: 2 } as any),
  )
}

export default invertDemo
