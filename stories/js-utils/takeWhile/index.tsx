import '../../.css/index.css'
import edgeCaseDemo from './edgeCaseDemo'
import takeWhileDemo from './takeWhileDemo'

const TakeWhileDemo = () => {
  return (
    <div>
      <div className="button" onClick={takeWhileDemo}>
        从数组开头提取元素，直到谓词函数返回假值
      </div>
      <div className="button" onClick={edgeCaseDemo}>
        边界情况验证
      </div>
    </div>
  )
}

export default TakeWhileDemo
