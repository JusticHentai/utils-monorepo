import '../../.css/index.css'
import edgeCaseDemo from './edgeCaseDemo'
import takeRightDemo from './takeRightDemo'

const TakeRightDemo = () => {
  return (
    <div>
      <div className="button" onClick={takeRightDemo}>
        创建一个切片数组，包含数组末尾的 n 个元素
      </div>
      <div className="button" onClick={edgeCaseDemo}>
        边界情况验证
      </div>
    </div>
  )
}

export default TakeRightDemo
