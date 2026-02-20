import '../../.css/index.css'
import basicDemo from './basicDemo'
import stepDemo from './stepDemo'
import rightDemo from './rightDemo'

const RangeDemo = () => {
  return (
    <div>
      <div className="button" onClick={basicDemo}>
        基础范围
      </div>
      <div className="button" onClick={stepDemo}>
        自定义步长
      </div>
      <div className="button" onClick={rightDemo}>
        rangeRight - 降序
      </div>
    </div>
  )
}

export default RangeDemo
