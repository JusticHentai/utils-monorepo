import '../../.css/index.css'
import basicDemo from './basicDemo'

const GetPaintMetricsDemo = () => {
  return (
    <div>
      <div className="button" onClick={basicDemo}>
        获取绘制性能指标
      </div>
    </div>
  )
}

export default GetPaintMetricsDemo
