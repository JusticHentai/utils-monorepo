import '../../.css/index.css'
import edgeCaseDemo from './edgeCaseDemo'
import toPairsDemo from './toPairsDemo'

const ToPairsDemo = () => {
  return (
    <div>
      <div className="button" onClick={toPairsDemo}>
        键值对转换
      </div>
      <div className="button" onClick={edgeCaseDemo}>
        边界情况验证
      </div>
    </div>
  )
}

export default ToPairsDemo
