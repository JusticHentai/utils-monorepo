import { useCallback, useState } from 'react'
import { action } from 'storybook/actions'
import useConditionalOnce from '../../../packages/element-utils/src/useConditionalOnce'
import '../../.css/index.css'

const UseConditionalOnceDemo = () => {
  const [count, setCount] = useState(0)
  const [threshold] = useState(3)

  // 当 count >= threshold 时，只执行一次
  const { executed, reset } = useConditionalOnce(
    count >= threshold,
    useCallback(() => {
      action('条件满足，执行回调')(`count(${count}) >= threshold(${threshold})`)
      return () => {
        action('清理函数执行')('组件卸载或重置时调用')
      }
    }, [count, threshold])
  )

  return (
    <div>
      <div style={{ marginBottom: 16, fontWeight: 'bold' }}>
        条件满足时只执行一次
      </div>
      <div style={{ marginBottom: 8 }}>
        当前计数：<span style={{ fontWeight: 'bold' }}>{count}</span>
      </div>
      <div style={{ marginBottom: 8 }}>
        触发阈值：<span style={{ fontWeight: 'bold' }}>{threshold}</span>
      </div>
      <div style={{ marginBottom: 16 }}>
        执行状态：
        <span
          style={{
            color: executed ? '#52c41a' : '#ff4d4f',
            fontWeight: 'bold',
          }}
        >
          {executed ? '已执行' : '未执行'}
        </span>
      </div>

      <div
        className="button"
        onClick={() => {
          setCount((c) => c + 1)
          action('增加计数')(count + 1)
        }}
      >
        增加计数 (+1)
      </div>

      <div
        className="button"
        onClick={() => {
          setCount(0)
          action('重置计数')(0)
        }}
      >
        重置计数为 0
      </div>

      <div
        className="button"
        onClick={() => {
          reset()
          action('调用 reset')('允许再次执行')
        }}
      >
        调用 reset（允许再次执行）
      </div>

      {/* 演示区域 */}
      <div className="area">
        <div
          style={{
            width: 280,
            padding: 20,
            background: executed
              ? 'linear-gradient(135deg, #52c41a 0%, #73d13d 100%)'
              : count >= threshold - 1
                ? 'linear-gradient(135deg, #faad14 0%, #ffc53d 100%)'
                : 'linear-gradient(135deg, #1890ff 0%, #40a9ff 100%)',
            borderRadius: 8,
            color: 'white',
            textAlign: 'center',
            transition: 'all 0.3s',
          }}
        >
          <div style={{ fontSize: 14, marginBottom: 8 }}>
            {executed
              ? '✅ 回调已执行'
              : count >= threshold - 1
                ? '⚠️ 即将触发'
                : '⏳ 等待条件满足'}
          </div>
          <div style={{ fontSize: 12, opacity: 0.9 }}>
            {executed
              ? '调用 reset 后可再次触发'
              : `还需增加 ${Math.max(0, threshold - count)} 次`}
          </div>
        </div>
      </div>
    </div>
  )
}

export default UseConditionalOnceDemo
