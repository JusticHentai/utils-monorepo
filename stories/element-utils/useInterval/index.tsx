import '../../.css/index.css'
import { useState } from 'react'
import useInterval from '../../../packages/element-utils/src/useInterval'
import { action } from 'storybook/actions'

const UseIntervalDemo = () => {
  const [count, setCount] = useState(0)
  const [delay, setDelay] = useState<number | undefined>(undefined)

  const clear = useInterval(
    () => {
      setCount((c) => c + 1)
      action('interval 执行')(`计数: ${count + 1}`)
    },
    delay,
    { immediate: false }
  )

  return (
    <div>
      <div style={{ marginBottom: 16, fontWeight: 'bold' }}>定时器 Interval</div>

      <div
        style={{
          marginBottom: 16,
          padding: 16,
          background: '#f5f5f5',
          borderRadius: 8,
        }}
      >
        <div style={{ fontSize: 32, textAlign: 'center', color: '#1890ff' }}>
          {count}
        </div>
        <div style={{ textAlign: 'center', color: '#999', marginTop: 8 }}>
          状态：{delay ? `运行中 (${delay}ms)` : '已停止'}
        </div>
      </div>

      <div
        className="button"
        onClick={() => {
          setDelay(1000)
          action('启动定时器')('间隔 1000ms')
        }}
      >
        启动 (1s 间隔)
      </div>
      <div
        className="button"
        onClick={() => {
          setDelay(500)
          action('启动定时器')('间隔 500ms')
        }}
      >
        启动 (0.5s 间隔)
      </div>
      <div
        className="button"
        onClick={() => {
          setDelay(undefined)
          action('停止定时器')('已停止')
        }}
      >
        停止
      </div>
      <div
        className="button"
        onClick={() => {
          clear()
          setDelay(undefined)
          action('清除定时器')('已清除')
        }}
      >
        清除
      </div>
      <div
        className="button"
        onClick={() => {
          setCount(0)
          action('重置计数')('计数已重置')
        }}
      >
        重置计数
      </div>
    </div>
  )
}

export default UseIntervalDemo
