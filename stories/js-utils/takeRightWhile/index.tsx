import '../../.css/index.css'
import edgeCaseDemo from './edgeCaseDemo'
import takeRightWhileDemo from './takeRightWhileDemo'

const TakeRightWhileDemo = () => {
  return (
    <div>
      <div className="button" onClick={takeRightWhileDemo}>
        从数组末尾提取元素，直到谓词函数返回假值
      </div>
      <div className="button" onClick={edgeCaseDemo}>
        边界情况验证
      </div>
    </div>
  )
}

export default TakeRightWhileDemo
