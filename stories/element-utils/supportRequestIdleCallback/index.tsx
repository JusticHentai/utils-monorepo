import '../../.css/index.css'
import basicDemo from './basicDemo'

const SupportRequestIdleCallbackDemo = () => {
  return (
    <div>
      <div className="button" onClick={basicDemo}>
        检测 requestIdleCallback 支持
      </div>
    </div>
  )
}

export default SupportRequestIdleCallbackDemo
