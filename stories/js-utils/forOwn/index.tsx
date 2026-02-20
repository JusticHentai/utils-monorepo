import '../../.css/index.css'
import edgeCaseDemo from './edgeCaseDemo'
import forOwnDemo from './forOwnDemo'

const ForOwnDemo = () => {
  return (
    <div>
      <div className="button" onClick={forOwnDemo}>
        遍历对象的自有可枚举属性
      </div>
      <div className="button" onClick={edgeCaseDemo}>
        边界情况验证
      </div>
    </div>
  )
}

export default ForOwnDemo
