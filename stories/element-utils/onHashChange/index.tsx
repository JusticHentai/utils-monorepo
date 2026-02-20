import '../../.css/index.css'
import basicDemo from './basicDemo'

const OnHashChangeDemo = () => {
  return (
    <div>
      <div className="button" onClick={basicDemo}>
        监听 Hash 变化
      </div>
    </div>
  )
}

export default OnHashChangeDemo
