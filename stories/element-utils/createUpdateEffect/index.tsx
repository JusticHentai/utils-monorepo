import '../../.css/index.css'
import { useEffect, useState } from 'react'
import { createUpdateEffect } from '../../../packages/element-utils/src/createUpdateEffect'
import { action } from 'storybook/actions'

const useUpdateEffect = createUpdateEffect(useEffect)

const CreateUpdateEffectDemo = () => {
  const [count, setCount] = useState(0)
  const [message, setMessage] = useState('首次渲染不会触发 effect')

  // 普通 useEffect - 首次渲染会触发
  useEffect(() => {
    action('useEffect 执行')({ count, message: '每次都会执行（包括首次）' })
  }, [count])

  // useUpdateEffect - 首次渲染不触发
  useUpdateEffect(() => {
    setMessage(`effect 触发，count: ${count}`)
    action('useUpdateEffect 执行')({ count, message: '只在更新时执行' })
  }, [count])

  return (
    <div>
      <div className="button" onClick={() => setCount((c) => c + 1)}>
        增加计数 (count: {count})
      </div>

      <div style={{ marginTop: 20, padding: 16, background: '#f5f5f5', borderRadius: 8 }}>
        <p>状态: {message}</p>
        <p style={{ fontSize: 12, color: '#666' }}>
          注意：首次渲染时 useUpdateEffect 不会执行
        </p>
      </div>
    </div>
  )
}

export default CreateUpdateEffectDemo
