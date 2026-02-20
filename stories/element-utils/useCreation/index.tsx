import { useState } from 'react'
import { action } from 'storybook/actions'
import useCreation from '../../../packages/element-utils/src/useCreation'
import '../../.css/index.css'

const UseCreationDemo = () => {
  const [count, setCount] = useState(0)
  const [dep, setDep] = useState(0)

  // useCreation 返回一个 ref，保证对象只在 dep 变化时重新创建
  const stableRef = useCreation(() => ({ id: Math.random() }), [dep])

  const handleShowValue = () => {
    action('useCreation 返回值')(stableRef.current)
  }

  return (
    <div>
      <div className="button" onClick={handleShowValue}>
        查看 useCreation 返回值
      </div>
      <div className="button" onClick={() => setCount((c) => c + 1)}>
        增加计数 (count: {count})
      </div>
      <div className="button" onClick={() => setDep((d) => d + 1)}>
        改变依赖 (dep: {dep})
      </div>
    </div>
  )
}

export default UseCreationDemo
