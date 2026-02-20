import { action } from 'storybook/actions'
import deepClone from '../../../packages/js-utils/src/deepClone'

/**
 * ArrayBuffer 深拷贝示例
 * 判断方式：通过 Uint8Array 视图修改克隆后的 buffer，原 buffer 不受影响
 * 原因：ArrayBuffer 使用 slice(0) 复制，会创建新的内存区域存储二进制数据
 */
const arrayBufferDemo = () => {
  const buffer = new ArrayBuffer(8)
  const view = new Uint8Array(buffer)
  view[0] = 42 // 设置初始值

  const cloned = deepClone(buffer)
  const clonedView = new Uint8Array(cloned)
  clonedView[0] = 100 // 修改克隆后的 buffer

  action('深拷贝 ArrayBuffer')({
    originalFirstByte: view[0],
    clonedFirstByte: clonedView[0],
    // 原 buffer 的值仍为 42，说明是深拷贝
    isDeep: view[0] !== clonedView[0],
  })
}

export default arrayBufferDemo
