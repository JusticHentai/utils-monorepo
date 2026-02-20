import { action } from 'storybook/actions'
import deepClone from '../../../packages/js-utils/src/deepClone'

/**
 * Set 深拷贝示例
 * 判断方式：Set 中包含对象，修改克隆后的对象，原 Set 中的对象不受影响
 * 原因：深拷贝会递归复制 Set 中的每个元素，包括对象元素
 */
const setDemo = () => {
  const obj = { id: 1 }
  const set = new Set([obj, { id: 2 }])
  const cloned = deepClone(set)

  // 获取克隆后 Set 的第一个元素并修改
  const clonedFirst = [...cloned][0]
  clonedFirst.id = 999

  action('深拷贝 Set')({
    original: [...set],
    cloned: [...cloned],
    // 原 Set 中的对象 id 仍为 1，说明是深拷贝
    isDeep: obj.id !== clonedFirst.id,
  })
}

export default setDemo
