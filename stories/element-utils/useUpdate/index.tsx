import { useRef } from 'react'
import { action } from 'storybook/actions'
import useUpdate from '../../../packages/element-utils/src/useUpdate'
import '../../.css/index.css'

const UseUpdateDemo = () => {
  const update = useUpdate()
  const renderCountRef = useRef(0)
  renderCountRef.current += 1

  const handleUpdate = () => {
    update()
    action('useUpdate')('触发强制重新渲染')
  }

  return (
    <div>
      <div className="button" onClick={handleUpdate}>
        强制重新渲染
      </div>
      <div className="area">
        <div className="card">
          渲染次数: {renderCountRef.current}
        </div>
      </div>
    </div>
  )
}

export default UseUpdateDemo
