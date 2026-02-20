import '../../.css/index.css'
import basicDemo from './basicDemo'

const SupportIntersectionObserverDemo = () => {
  return (
    <div>
      <div className="button" onClick={basicDemo}>
        检测 IntersectionObserver 支持
      </div>
    </div>
  )
}

export default SupportIntersectionObserverDemo
