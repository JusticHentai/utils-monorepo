import '../../.css/index.css'
import { useState } from 'react'
import useDoubleClick from '../../../packages/element-utils/src/useDoubleClick'
import { action } from 'storybook/actions'

const UseDoubleClickDemo = () => {
  const [comboCount, setComboCount] = useState(0)
  const [finalCount, setFinalCount] = useState(0)

  const { handleClick, handleTouch } = useDoubleClick({
    onCombo: (count) => {
      setComboCount(count)
      action('连击')(count + ' 连击')
    },
    onComboEnd: (count) => {
      setFinalCount(count)
      action('连击结束')('最终连击次数: ' + count)
      setTimeout(() => setComboCount(0), 100)
    },
    delay: 300,
  })

  return (
    <div>
      <div
        className="button"
        onClick={handleClick}
        onTouchEnd={handleTouch}
      >
        点击测试（连击计数）
      </div>

      <div style={{ marginTop: 20, padding: 16, background: '#f5f5f5', borderRadius: 8 }}>
        <p>当前连击次数: <strong>{comboCount}</strong></p>
        {finalCount > 0 && <p>上次最终次数: <strong>{finalCount}</strong></p>}
        <p style={{ fontSize: 12, color: '#666', marginTop: 8 }}>
          每次点击触发 onCombo | 连击结束触发 onComboEnd
        </p>
      </div>
    </div>
  )
}

export default UseDoubleClickDemo
