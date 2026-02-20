import '../../.css/index.css'
import edgeCaseDemo from './edgeCaseDemo'
import basicDemo from './basicDemo'

const FindKeyDemo = () => {
  return (
    <div>
      <div className="button" onClick={basicDemo}>
        findKey / findLastKey - 查找键名
      </div>
      <div className="button" onClick={edgeCaseDemo}>
        边界情况验证
      </div>
    </div>
  )
}

export default FindKeyDemo
