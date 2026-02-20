import { action } from 'storybook/actions'
import { depsAreSame } from '../../../packages/element-utils/src/depsAreSame'

const basicDemo = () => {
  // 相同的原始值
  const result1 = depsAreSame([1, 'a', true], [1, 'a', true])
  action('相同原始值比较')(result1) // true

  // 不同的原始值
  const result2 = depsAreSame([1, 'a'], [1, 'b'])
  action('不同原始值比较')(result2) // false

  // 同一个对象引用
  const obj = { x: 1 }
  const result3 = depsAreSame([obj], [obj])
  action('同一对象引用比较')(result3) // true

  // 不同对象引用（即使内容相同）
  const result4 = depsAreSame([{ x: 1 }], [{ x: 1 }])
  action('不同对象引用比较')(result4) // false

  // NaN 比较
  const result5 = depsAreSame([NaN], [NaN])
  action('NaN 比较')(result5) // true (Object.is)
}

export default basicDemo
