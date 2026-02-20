import { action } from 'storybook/actions'
import deepClone from '../../../packages/js-utils/src/deepClone'

/**
 * DataView 深拷贝示例
 * 判断方式：通过克隆后的 DataView 修改数据，原 DataView 不受影响
 * 原因：DataView 克隆时会先复制底层 ArrayBuffer，再创建新的 DataView
 */
const dataViewDemo = () => {
  const buffer = new ArrayBuffer(16)
  const view = new DataView(buffer)
  view.setInt32(0, 42) // 设置初始值

  const cloned = deepClone(view)
  cloned.setInt32(0, 100) // 修改克隆后的 DataView

  action('深拷贝 DataView')({
    originalValue: view.getInt32(0),
    clonedValue: cloned.getInt32(0),
    // 原 DataView 的值仍为 42，说明是深拷贝
    isDeep: view.getInt32(0) !== cloned.getInt32(0),
  })
}

export default dataViewDemo
