import '../../.css/index.css'
import { useState } from 'react'
import useDebounceValue from '../../../packages/element-utils/src/useDebounceValue'
import { action } from 'storybook/actions'

const UseDebounceValueDemo = () => {
  const [value, setValue] = useState('')
  const debouncedValue = useDebounceValue(value, { delay: 500 })

  return (
    <div>
      <input
        placeholder="输入内容..."
        value={value}
        onChange={(e) => {
          setValue(e.target.value)
          action('输入变化')(e.target.value)
        }}
        style={{ padding: 8, width: 200, marginBottom: 20 }}
      />

      <div style={{ padding: 16, background: '#f5f5f5', borderRadius: 8 }}>
        <p>实时值: {value}</p>
        <p>防抖值: {debouncedValue}</p>
        <p style={{ fontSize: 12, color: '#666' }}>
          提示：防抖值在停止输入 500ms 后更新
        </p>
      </div>
    </div>
  )
}

export default UseDebounceValueDemo
