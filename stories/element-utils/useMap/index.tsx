import '../../.css/index.css'
import { useState } from 'react'
import useMap from '../../../packages/element-utils/src/useMap'
import { action } from 'storybook/actions'

const UseMapDemo = () => {
  const [map, { set, get, remove, reset, setAll }] = useMap<string, string>([
    ['name', 'Alice'],
    ['age', '25'],
  ])
  const [inputKey, setInputKey] = useState('')
  const [inputValue, setInputValue] = useState('')

  const handleSet = () => {
    if (inputKey) {
      set(inputKey, inputValue)
      action('set')({ key: inputKey, value: inputValue })
      setInputKey('')
      setInputValue('')
    }
  }

  const handleRemove = () => {
    if (inputKey) {
      remove(inputKey)
      action('remove')({ key: inputKey })
      setInputKey('')
    }
  }

  return (
    <div>
      <div style={{ marginBottom: 20 }}>
        <input
          placeholder="Key"
          value={inputKey}
          onChange={(e) => setInputKey(e.target.value)}
          style={{ marginRight: 8, padding: 4 }}
        />
        <input
          placeholder="Value"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          style={{ marginRight: 8, padding: 4 }}
        />
      </div>

      <div className="button" onClick={handleSet}>
        添加/更新
      </div>
      <div className="button" onClick={handleRemove}>
        删除
      </div>
      <div className="button" onClick={() => { reset(); action('reset')() }}>
        重置
      </div>

      <div style={{ marginTop: 20, padding: 16, background: '#f5f5f5', borderRadius: 8 }}>
        <p>Map 内容 ({map.size} 项):</p>
        <ul>
          {Array.from(map.entries()).map(([k, v]) => (
            <li key={k}>{k}: {v}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default UseMapDemo
