import '../../.css/index.css'
import edgeCaseDemo from './edgeCaseDemo'
import toPairsInDemo from './toPairsInDemo'

const ToPairsInDemo = () => {
  return (
    <div>
      <div className="button" onClick={toPairsInDemo}>
        类似于 toPairs，但包括继承的属性
      </div>
      <div className="button" onClick={edgeCaseDemo}>
        边界情况验证
      </div>
    </div>
  )
}

export default ToPairsInDemo
