import '../../.css/index.css'
import edgeCaseDemo from './edgeCaseDemo'
import isEqualWithDemo from './isEqualWithDemo'

const IsEqualWithDemo = () => {
  return (
    <div>
      <div className="button" onClick={isEqualWithDemo}>
        自定义比较
      </div>
      <div className="button" onClick={edgeCaseDemo}>
        边界情况验证
      </div>
    </div>
  )
}

export default IsEqualWithDemo
