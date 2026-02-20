import '../../.css/index.css'
import { useState } from 'react'
import useSet from '../../../packages/element-utils/src/useSet'
import { action } from 'storybook/actions'

const UseSetDemo = () => {
  const [set, { add, remove, reset }] = useSet<string>(['apple', 'banana'])
  const [inputValue, setInputValue] = useState('')

  const handleAdd = () => {
    if (inputValue) {
      add(inputValue)
      action('add')({ value: inputValue })
      setInputValue('')
    }
  }

  const handleRemove = () => {
    if (inputValue) {
      remove(inputValue)
      action('remove')({ value: inputValue })
      setInputValue('')
    }
  }

  return (
    <div>
      <div style={{ marginBottom: 20 }}>
        <input
          placeholder="输入值"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          style={{ marginRight: 8, padding: 4 }}
        />
      </div>

      <div className="button" onClick={handleAdd}>
        添加
      </div>
      <div className="button" onClick={handleRemove}>
        删除
      </div>
      <div className="button" onClick={() => { reset(); action('reset')() }}>
        重置
      </div>

      <div style={{ marginTop: 20, padding: 16, background: '#f5f5f5', borderRadius: 8 }}>
        <p>Set 内容 ({set.size} 项):</p>
        <ul>
          {Array.from(set).map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default UseSetDemo
