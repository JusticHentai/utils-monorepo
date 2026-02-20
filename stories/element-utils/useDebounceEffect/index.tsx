import '../../.css/index.css'
import { useState } from 'react'
import useDebounceEffect from '../../../packages/element-utils/src/useDebounceEffect'
import { action } from 'storybook/actions'

const UseDebounceEffectDemo = () => {
  const [value, setValue] = useState('')
  const [effectCount, setEffectCount] = useState(0)

  useDebounceEffect(
    () => {
      if (value) {
        setEffectCount((c) => c + 1)
        action('防抖 effect 执行')({ value })
      }
    },
    [value],
    { delay: 500 }
  )

  return (
    <div>
      <input
        placeholder="输入内容..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
        style={{ padding: 8, width: 200, marginBottom: 20 }}
      />

      <div style={{ padding: 16, background: '#f5f5f5', borderRadius: 8 }}>
        <p>输入值: {value}</p>
        <p>effect 执行次数: {effectCount}</p>
        <p style={{ fontSize: 12, color: '#666' }}>
          提示：停止输入 500ms 后才会触发 effect
        </p>
      </div>
    </div>
  )
}

export default UseDebounceEffectDemo
