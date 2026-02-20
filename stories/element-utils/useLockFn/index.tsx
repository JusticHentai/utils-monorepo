import '../../.css/index.css'
import { useState } from 'react'
import useLockFn from '../../../packages/element-utils/src/useLockFn'
import { action } from 'storybook/actions'

const UseLocknDemo = () => {
  const [loading, setLoading] = useState(false)
  const [count, setCount] = useState(0)

  const submit = useLockFn(async () => {
    setLoading(true)
    action('开始请求')('请求中...')

    // 模拟异步请求
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setCount((c) => c + 1)
    setLoading(false)
    action('请求完成')('请求成功')
  })

  return (
    <div>
      <div style={{ marginBottom: 16, fontWeight: 'bold' }}>竞态锁</div>
      <div style={{ marginBottom: 8, color: '#666' }}>
        快速连续点击按钮，只会执行一次异步请求：
      </div>

      <div
        style={{
          marginBottom: 16,
          padding: 16,
          background: '#f5f5f5',
          borderRadius: 8,
        }}
      >
        <div>
          请求完成次数：<span style={{ color: '#52c41a' }}>{count}</span>
        </div>
        <div>
          状态：
          <span style={{ color: loading ? '#faad14' : '#52c41a' }}>
            {loading ? '请求中...' : '空闲'}
          </span>
        </div>
      </div>

      <div
        className="button"
        onClick={submit}
        style={{
          opacity: loading ? 0.6 : 1,
        }}
      >
        {loading ? '请求中...' : '提交请求 (2秒)'}
      </div>

      <div style={{ marginTop: 16, color: '#999', fontSize: 12 }}>
        提示：useLockFn 会在异步函数执行期间阻止重复调用
      </div>
    </div>
  )
}

export default UseLocknDemo
