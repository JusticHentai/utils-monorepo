import '../../.css/index.css'
import edgeCaseDemo from './edgeCaseDemo'
import hasInDemo from './hasInDemo'

const HasInDemo = () => {
  return (
    <div>
      <div className="button" onClick={hasInDemo}>
        检查对象属性路径是否存在（含继承属性）
      </div>
      <div className="button" onClick={edgeCaseDemo}>
        边界情况验证
      </div>
    </div>
  )
}

export default HasInDemo
