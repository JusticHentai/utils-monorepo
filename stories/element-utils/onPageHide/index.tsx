import '../../.css/index.css'
import basicDemo from './basicDemo'

const OnPageHideDemo = () => {
  return (
    <div>
      <div className="button" onClick={basicDemo}>
        监听页面隐藏
      </div>
    </div>
  )
}

export default OnPageHideDemo
