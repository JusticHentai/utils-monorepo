import { action } from 'storybook/actions'
import deepClone from '../../../packages/js-utils/src/deepClone'

/**
 * Error 深拷贝示例
 * 判断方式：比较原 Error 和克隆 Error 的引用，以及 message 和 stack 是否保留
 * 原因：Error 通过构造函数创建新实例，并复制 message 和 stack 属性
 */
const errorDemo = () => {
  const error = new TypeError('原始错误信息')
  const cloned = deepClone(error)

  // 修改克隆后的 message（注意：Error 的 message 是只读的，这里只验证引用不同）
  action('深拷贝 Error')({
    originalMessage: error.message,
    clonedMessage: cloned.message,
    originalName: error.name,
    clonedName: cloned.name,
    // 引用不同说明是深拷贝，message 相同说明值被正确复制
    isDeep: error !== cloned && error.message === cloned.message,
    hasStack: !!cloned.stack,
  })
}

export default errorDemo
