import '../../.css/index.css'
import basicDemo from './basicDemo'

const OnPageFreezeDemo = () => {
  return (
    <div>
      <div className="button" onClick={basicDemo}>
        监听页面冻结
      </div>
    </div>
  )
}

export default OnPageFreezeDemo
