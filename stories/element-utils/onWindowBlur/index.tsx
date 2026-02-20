import '../../.css/index.css'
import basicDemo from './basicDemo'

const OnWindowBlurDemo = () => {
  return (
    <div>
      <div className="button" onClick={basicDemo}>
        监听窗口失焦
      </div>
    </div>
  )
}

export default OnWindowBlurDemo
