import '../../.css/index.css'
import conformsToDemo from './conformsToDemo'
import conformsDemo from './conformsDemo'

const ConformsToDemo = () => {
  return (
    <div>
      <div className="button" onClick={conformsToDemo}>
        conformsTo - 检查对象约束
      </div>
      <div className="button" onClick={conformsDemo}>
        conforms - 创建约束函数
      </div>
    </div>
  )
}

export default ConformsToDemo
