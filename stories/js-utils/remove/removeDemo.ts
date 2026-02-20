import { action } from 'storybook/actions'
import remove from '../../../packages/js-utils/src/remove'

const removeDemo = () => {
  // 基本用法: 移除偶数 (lodash: remove([1,2,3,4], isEven) => array=[1,3], removed=[2,4])
  const arr1 = [1, 2, 3, 4]
  const removed1 = remove(arr1, (n) => n % 2 === 0)
  action('remove - 移除偶数')({ 原数组变为: arr1, 被移除: removed1 })

  // 验证原地修改: remove 直接修改原数组
  const arr2 = [10, 20, 30, 40, 50]
  const beforeRef = arr2
  const removed2 = remove(arr2, (n) => n > 25)
  action('remove - 原地修改验证')({
    sameReference: arr2 === beforeRef,
    剩余: arr2,
    被移除: removed2,
  })

  // 谓词参数: (value, index, array)
  // lodash test: remove by even INDEX => array becomes [2] (keeps index 1's value)
  const arr3 = [1, 2, 3]
  const removed3 = remove(arr3, (_n, index) => index % 2 === 0)
  action('remove - 按索引移除(偶数索引)')({ 剩余: arr3, 被移除: removed3 })

  // 对象数组
  const users = [
    { name: 'Alice', active: true },
    { name: 'Bob', active: false },
    { name: 'Charlie', active: false },
  ]
  const inactive = remove(users, (u) => !u.active)
  action('remove - 移除非活跃用户')({ 剩余: users, 被移除: inactive })

  // 空数组
  action('remove - 空数组')(remove([], () => true))
}

export default removeDemo