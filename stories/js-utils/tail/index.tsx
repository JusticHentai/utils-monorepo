import '../../.css/index.css'
import edgeCaseDemo from './edgeCaseDemo'
import tailDemo from './tailDemo'

const TailDemo = () => {
  return (
    <div>
      <div className="button" onClick={tailDemo}>
        获取尾部
      </div>
      <div className="button" onClick={edgeCaseDemo}>
        边界情况验证
      </div>
    </div>
  )
}

export default TailDemo
