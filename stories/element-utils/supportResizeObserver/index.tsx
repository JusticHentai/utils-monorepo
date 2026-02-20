import '../../.css/index.css'
import basicDemo from './basicDemo'

const SupportResizeObserverDemo = () => {
  return (
    <div>
      <div className="button" onClick={basicDemo}>
        检测 ResizeObserver 支持
      </div>
    </div>
  )
}

export default SupportResizeObserverDemo
