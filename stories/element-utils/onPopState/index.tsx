import '../../.css/index.css'
import basicDemo from './basicDemo'

const OnPopStateDemo = () => {
  return (
    <div>
      <div className="button" onClick={basicDemo}>
        监听浏览器前进/后退
      </div>
    </div>
  )
}

export default OnPopStateDemo
