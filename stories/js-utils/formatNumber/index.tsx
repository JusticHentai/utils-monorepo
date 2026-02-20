import '../../.css/index.css'
import basicDemo from './basicDemo'
import customDemo from './customDemo'
import magnitudeDemo from './magnitudeDemo'
import negativeDemo from './negativeDemo'

const FormatNumberDemo = () => {
  return (
    <div>
      <div className="button" onClick={basicDemo}>
        基础用法
      </div>
      <div className="button" onClick={magnitudeDemo}>
        各数量级演示
      </div>
      <div className="button" onClick={negativeDemo}>
        负数处理
      </div>
      <div className="button" onClick={customDemo}>
        自定义配置
      </div>
    </div>
  )
}

export default FormatNumberDemo
