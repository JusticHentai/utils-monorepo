import '../../.css/index.css'
import edgeCaseDemo from './edgeCaseDemo'
import uniqueIdDemo from './uniqueIdDemo'

const UniqueIdDemo = () => {
  return (
    <div>
      <div className="button" onClick={uniqueIdDemo}>
        生成ID
      </div>
      <div className="button" onClick={edgeCaseDemo}>
        边界情况验证
      </div>
    </div>
  )
}

export default UniqueIdDemo
