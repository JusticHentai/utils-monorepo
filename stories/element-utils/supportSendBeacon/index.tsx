import '../../.css/index.css'
import basicDemo from './basicDemo'

const SupportSendBeaconDemo = () => {
  return (
    <div>
      <div className="button" onClick={basicDemo}>
        检测 sendBeacon 支持
      </div>
    </div>
  )
}

export default SupportSendBeaconDemo
