import '../../.css/index.css'
import edgeCaseDemo from './edgeCaseDemo'
import arrayDemo from './arrayDemo'

const IsArrayDemo = () => {
  return (
    <div>
      <div className="button" onClick={arrayDemo}>
        isArray - 类型检测
      </div>
      <div className="button" onClick={edgeCaseDemo}>
        边界情况验证
      </div>
    </div>
  )
}

export default IsArrayDemo
