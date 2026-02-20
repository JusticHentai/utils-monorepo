import { action } from 'storybook/actions'
import { useLocalStorageState } from '../../../packages/element-utils/src/useStorageState'

/**
 * useLocalStorageState 基础用法
 *
 * 在 React 组件中使用：
 */
const localStorageDemo = () => {
  action('useLocalStorageState 用法')(`
// 在 React 组件中使用
const [message, setMessage] = useLocalStorageState<string>('my-key', {
  defaultValue: 'Hello',
})

// 更新值（同时同步到 localStorage）
setMessage('World')

// 使用函数式更新
setMessage((prev) => prev + '!')

// 清除值（从 localStorage 移除）
setMessage(undefined)
  `)

  action('说明')('useLocalStorageState 将状态持久化到 localStorage，刷新页面后值仍保留')
}

export default localStorageDemo
