import '../../.css/index.css'
import edgeCaseDemo from './edgeCaseDemo'
import toArrayDemo from './toArrayDemo'

const ToArrayDemo = () => {
  return (
    <div>
      <div className="button" onClick={toArrayDemo}>
        将 value 转换为数组
      </div>
      <div className="button" onClick={edgeCaseDemo}>
        边界情况验证
      </div>
    </div>
  )
}

export default ToArrayDemo
