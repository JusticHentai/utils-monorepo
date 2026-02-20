import { action } from 'storybook/actions'
import { useLocalStorageState } from '../../../packages/element-utils/src/useStorageState'

/**
 * 自定义序列化/反序列化
 *
 * 默认使用 JSON.stringify/JSON.parse，可自定义编码方式
 */
const customSerializerDemo = () => {
  action('自定义序列化用法')(`
// 使用 Base64 编码存储
const [data, setData] = useLocalStorageState<{ name: string; age: number }>('user-data', {
  defaultValue: { name: '张三', age: 25 },
  serializer: (v) => btoa(JSON.stringify(v)),
  deserializer: (v) => JSON.parse(atob(v)),
  onError: (e) => console.error('存储错误:', e),
})

// localStorage 中存储的是 Base64 编码的字符串
// 而不是明文 JSON
  `)

  action('说明')('自定义 serializer/deserializer 可实现加密存储、压缩存储等高级需求')
}

export default customSerializerDemo
