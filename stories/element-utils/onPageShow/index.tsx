import '../../.css/index.css'
import basicDemo from './basicDemo'

const OnPageShowDemo = () => {
  return (
    <div>
      <div className="button" onClick={basicDemo}>
        监听页面显示
      </div>
    </div>
  )
}

export default OnPageShowDemo
