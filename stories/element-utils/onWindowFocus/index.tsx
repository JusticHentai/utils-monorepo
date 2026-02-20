import '../../.css/index.css'
import basicDemo from './basicDemo'

const OnWindowFocusDemo = () => {
  return (
    <div>
      <div className="button" onClick={basicDemo}>
        监听窗口聚焦
      </div>
    </div>
  )
}

export default OnWindowFocusDemo
