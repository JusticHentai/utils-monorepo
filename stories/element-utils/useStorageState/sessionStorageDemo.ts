import { action } from 'storybook/actions'
import { useSessionStorageState } from '../../../packages/element-utils/src/useStorageState'

/**
 * useSessionStorageState 基础用法
 *
 * 在 React 组件中使用：
 */
const sessionStorageDemo = () => {
  action('useSessionStorageState 用法')(`
// 在 React 组件中使用
const [count, setCount] = useSessionStorageState<number>('counter', {
  defaultValue: 0,
})

// 更新值
setCount((prev) => (prev ?? 0) + 1)

// 重置
setCount(0)
  `)

  action('说明')('useSessionStorageState 将状态持久化到 sessionStorage，关闭标签页后值会清除')
}

export default sessionStorageDemo
