import '../../.css/index.css'
import edgeCaseDemo from './edgeCaseDemo'
import isMatchWithDemo from './isMatchWithDemo'

const IsMatchWithDemo = () => {
  return (
    <div>
      <div className="button" onClick={isMatchWithDemo}>
        类似于 isMatch，但支持自定义比较器
      </div>
      <div className="button" onClick={edgeCaseDemo}>
        边界情况验证
      </div>
    </div>
  )
}

export default IsMatchWithDemo
