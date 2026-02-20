import { action } from 'storybook/actions'
import deepClone from '../../../packages/js-utils/src/deepClone'

/**
 * TypedArray 深拷贝示例（以 Uint8Array 为例）
 * 判断方式：修改克隆后数组的元素，原数组不受影响
 * 原因：TypedArray 通过构造函数复制，会创建新的底层 ArrayBuffer
 */
const typedArrayDemo = () => {
  const arr = new Uint8Array([1, 2, 3, 4, 5])
  const cloned = deepClone(arr)

  // 修改克隆后的数组
  cloned[0] = 255

  action('深拷贝 TypedArray (Uint8Array)')({
    original: Array.from(arr),
    cloned: Array.from(cloned),
    // 原数组第一个元素仍为 1，说明是深拷贝
    isDeep: arr[0] !== cloned[0],
  })
}

export default typedArrayDemo
