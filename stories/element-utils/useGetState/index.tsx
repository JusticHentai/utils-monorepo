import '../../.css/index.css'
import useGetState from '../../../packages/element-utils/src/useGetState'
import { action } from 'storybook/actions'

const UseGetStateDemo = () => {
  const [count, setCount, getCount] = useGetState(0)

  const handleClick = () => {
    setCount((c) => c + 1)
    // 立即获取最新值（避免闭包问题）
    setTimeout(() => {
      action('1秒后获取的值')(getCount())
    }, 1000)
  }

  const handleShowCurrent = () => {
    action('当前值')(getCount())
  }

  return (
    <div>
      <div className="button" onClick={handleClick}>
        增加并延迟获取 (count: {count})
      </div>
      <div className="button" onClick={handleShowCurrent}>
        立即获取当前值
      </div>

      <div style={{ marginTop: 20, padding: 16, background: '#f5f5f5', borderRadius: 8 }}>
        <p>当前计数: {count}</p>
        <p style={{ fontSize: 12, color: '#666' }}>
          提示：点击"增加并延迟获取"后，getCount() 在 1 秒后仍能获取最新值
        </p>
      </div>
    </div>
  )
}

export default UseGetStateDemo
