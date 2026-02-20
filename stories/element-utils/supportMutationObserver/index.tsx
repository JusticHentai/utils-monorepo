import '../../.css/index.css'
import basicDemo from './basicDemo'

const SupportMutationObserverDemo = () => {
  return (
    <div>
      <div className="button" onClick={basicDemo}>
        检测 MutationObserver 支持
      </div>
    </div>
  )
}

export default SupportMutationObserverDemo
