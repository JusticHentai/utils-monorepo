import '../../.css/index.css'
import basicDemo from './basicDemo'

const OnUnloadDemo = () => {
  return (
    <div>
      <div className="button" onClick={basicDemo}>
        监听页面卸载
      </div>
    </div>
  )
}

export default OnUnloadDemo
