import '../../.css/index.css'
import toPathArrayDemo from './toPathArrayDemo'
import edgeCaseDemo from './edgeCaseDemo'

const ToPathArrayDemo = () => {
  return (
    <div>
      <div className="button" onClick={toPathArrayDemo}>
        路径解析基础用法
      </div>
      <div className="button" onClick={edgeCaseDemo}>
        边界情况验证
      </div>
    </div>
  )
}

export default ToPathArrayDemo
