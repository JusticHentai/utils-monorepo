import '../../.css/index.css'
import basicDemo from './basicDemo'

const SupportRequestAnimationFrameDemo = () => {
  return (
    <div>
      <div className="button" onClick={basicDemo}>
        检测 requestAnimationFrame 支持
      </div>
    </div>
  )
}

export default SupportRequestAnimationFrameDemo
