import '../../.css/index.css'
import edgeCaseDemo from './edgeCaseDemo'
import normalDemo from './normalDemo'

const walkDemo = () => {
  return (
    <div>
      <div className="button" onClick={normalDemo}>
        遍历对象并处理值
      </div>
      <div className="button" onClick={edgeCaseDemo}>
        边界情况验证
      </div>
    </div>
  )
}

export default walkDemo
