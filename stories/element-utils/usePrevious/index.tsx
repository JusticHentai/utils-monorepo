import { useState } from 'react'
import { action } from 'storybook/actions'
import usePrevious from '../../../packages/element-utils/src/usePrevious'
import '../../.css/index.css'

const UsePreviousDemo = () => {
  const [count, setCount] = useState(0)
  const [prevCount, updatePrevCount] = usePrevious(count)

  return (
    <div>
      <div style={{ marginBottom: 16, fontWeight: 'bold' }}>保存上一次值</div>
      <div style={{ marginBottom: 8, color: '#666' }}>
        usePrevious 返回 [prevRef, update]，只有调用 update 时才会更新 prev：
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
          当前 count: <span style={{ color: '#1890ff' }}>{count}</span>
        </div>
        <div>
          上一次 count:{' '}
          <span style={{ color: '#52c41a' }}>{prevCount.current ?? '无'}</span>
        </div>
      </div>

      <div
        className="button"
        onClick={() => {
          updatePrevCount()
          setCount((c) => c + 1)
          action('count +1（记录 prev）')({
            current: count + 1,
            previous: prevCount.current,
          })
        }}
      >
        count + 1（记录 prev）
      </div>

      <div
        className="button"
        onClick={() => {
          setCount((c) => c + 1)
          action('count +1（不记录 prev）')({
            current: count + 1,
            previous: prevCount.current,
          })
        }}
      >
        count + 1（不记录 prev）
      </div>

      <div
        className="button"
        onClick={() => {
          updatePrevCount()
          action('手动记录 prev')({
            current: count,
            previous: prevCount.current,
          })
        }}
      >
        仅记录当前值为 prev
      </div>
    </div>
  )
}

export default UsePreviousDemo
