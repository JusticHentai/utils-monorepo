import { action } from 'storybook/actions'
import takeWhile from '../../../packages/js-utils/src/takeWhile'
import takeRightWhile from '../../../packages/js-utils/src/takeRightWhile'

const takeWhileDemo = () => {
  const arr = [1, 2, 3, 4]

  // takeWhile：从头开始取，直到条件不满足
  action('takeWhile - n < 3')({
    输入: arr,
    结果: takeWhile(arr, (n) => n < 3),
  })

  // takeRightWhile：从尾部取，直到条件不满足
  action('takeRightWhile - n > 2')({
    输入: arr,
    结果: takeRightWhile(arr, (n) => n > 2),
  })

  // 全部满足条件
  action('takeWhile - 全部满足')({
    输入: arr,
    结果: takeWhile(arr, (n) => n < 10),
  })

  // 首元素不满足 => 空数组
  action('takeWhile - 首元素不满足')({
    输入: arr,
    结果: takeWhile(arr, (n) => n > 5),
  })

  // takeRightWhile 尾元素不满足 => 空数组
  action('takeRightWhile - 尾元素不满足')({
    输入: arr,
    结果: takeRightWhile(arr, (n) => n < 1),
  })
}

export default takeWhileDemo
