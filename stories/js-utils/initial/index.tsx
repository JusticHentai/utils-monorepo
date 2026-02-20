import '../../.css/index.css'
import edgeCaseDemo from './edgeCaseDemo'
import basicDemo from './basicDemo'

const InitialDemo = () => {
  return (
    <div>
      <div className="button" onClick={basicDemo}>
        去除最后一个元素
      </div>
      <div className="button" onClick={edgeCaseDemo}>
        边界情况验证
      </div>
    </div>
  )
}

export default InitialDemo
