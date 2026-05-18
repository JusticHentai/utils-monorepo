import '../../.css/index.css'
import basicDemo from './basicDemo'

const SupportTextEncoderDemo = () => {
  return (
    <div>
      <div className="button" onClick={basicDemo}>
        检测 TextEncoder 支持
      </div>
    </div>
  )
}

export default SupportTextEncoderDemo
