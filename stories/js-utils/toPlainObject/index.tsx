import '../../.css/index.css'
import edgeCaseDemo from './edgeCaseDemo'
import toPlainObjectDemo from './toPlainObjectDemo'

const ToPlainObjectDemo = () => {
  return (
    <div>
      <div className="button" onClick={toPlainObjectDemo}>
        将 value 转换为普通对象
      </div>
      <div className="button" onClick={edgeCaseDemo}>
        边界情况验证
      </div>
    </div>
  )
}

export default ToPlainObjectDemo
