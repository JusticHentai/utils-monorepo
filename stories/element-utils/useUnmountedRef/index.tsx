import { useState, useEffect } from 'react'
import { action } from 'storybook/actions'
import useUnmountedRef from '../../../packages/element-utils/src/useUnmountedRef'
import '../../.css/index.css'

const ChildComponent = () => {
  const unmountedRef = useUnmountedRef()

  useEffect(() => {
    // 模拟异步操作
    const timer = setTimeout(() => {
      if (unmountedRef.current) {
        action('useUnmountedRef')('组件已卸载，跳过状态更新')
      } else {
        action('useUnmountedRef')('组件仍挂载，安全更新状态')
      }
    }, 2000)

    return () => clearTimeout(timer)
  }, [unmountedRef])

  return (
    <div className="card">
      子组件已挂载（2秒后检查卸载状态）
    </div>
  )
}

const UseUnmountedRefDemo = () => {
  const [show, setShow] = useState(true)

  return (
    <div>
      <div className="button" onClick={() => setShow(!show)}>
        {show ? '卸载子组件' : '挂载子组件'}
      </div>
      <div className="area">
        {show && <ChildComponent />}
      </div>
    </div>
  )
}

export default UseUnmountedRefDemo
