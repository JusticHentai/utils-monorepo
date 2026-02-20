import { action } from 'storybook/actions'
import reverse from '../../../packages/js-utils/src/reverse'

const reverseDemo = () => {
  // 基本反转 (lodash: reverse([1,2,3]) => [3,2,1], returns same ref)
  const arr = [1, 2, 3]
  const result = reverse(arr)
  action('reverse - 反转结果')(result)

  // 验证原地修改：返回的是同一个数组引用
  action('reverse - 同一引用')(result === arr)
  action('reverse - 原数组已修改')(arr)

  // 字符串数组
  action('reverse - 字符串数组')(reverse(['a', 'b', 'c', 'd']))

  // 空数组
  action('reverse - 空数组')(reverse([]))

  // 含 null 的数组
  action('reverse - 含null')(reverse([0, 1, 2, null]))
}

export default reverseDemo