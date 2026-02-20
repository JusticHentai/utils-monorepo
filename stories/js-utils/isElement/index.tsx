import '../../.css/index.css'
import edgeCaseDemo from './edgeCaseDemo'
import isElementDemo from './isElementDemo'

const IsElementDemo = () => {
  return (
    <div>
      <div className="button" onClick={isElementDemo}>
        检查 value 是否是 DOM 元素
      </div>
      <div className="button" onClick={edgeCaseDemo}>
        边界情况验证
      </div>
    </div>
  )
}

export default IsElementDemo
