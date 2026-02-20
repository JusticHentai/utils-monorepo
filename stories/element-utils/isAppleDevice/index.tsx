import '../../.css/index.css'
import basicDemo from './basicDemo'

const IsAppleDeviceDemo = () => {
  return (
    <div>
      <div className="button" onClick={basicDemo}>
        检测当前设备
      </div>
    </div>
  )
}

export default IsAppleDeviceDemo
