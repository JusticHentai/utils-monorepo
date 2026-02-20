import '../../.css/index.css'
import edgeCaseDemo from './edgeCaseDemo'
import conformsDemo from './conformsDemo'

const ConformsDemo = () => {
  return (
    <div>
      <div className="button" onClick={conformsDemo}>
        创建一个函数，检查给定的对象是否符合约束条件
      </div>
      <div className="button" onClick={edgeCaseDemo}>
        边界情况验证
      </div>
    </div>
  )
}

export default ConformsDemo
