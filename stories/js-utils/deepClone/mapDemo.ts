import { action } from 'storybook/actions'
import deepClone from '../../../packages/js-utils/src/deepClone'

/**
 * Map 深拷贝示例
 * 判断方式：修改克隆后 Map 中嵌套对象的属性，原 Map 不受影响
 * 原因：如果是深拷贝，嵌套对象也会被复制，修改克隆对象不会影响原对象
 */
const mapDemo = () => {
  const obj = { nested: true }
  const map = new Map<string, any>([
    ['key1', obj],
    ['key2', { value: 2 }],
  ])
  const cloned = deepClone(map)

  // 修改克隆后的 Map 中的嵌套对象
  cloned.get('key1').nested = false

  action('深拷贝 Map')({
    original: Object.fromEntries(map),
    cloned: Object.fromEntries(cloned),
    // 原 Map 中的对象不受影响，说明是深拷贝
    isDeep: map.get('key1')!.nested !== cloned.get('key1').nested,
  })
}

export default mapDemo
