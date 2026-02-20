import '../../.css/index.css'
import edgeCaseDemo from './edgeCaseDemo'
import findLastKeyDemo from './findLastKeyDemo'

const FindLastKeyDemo = () => {
  return (
    <div>
      <div className="button" onClick={findLastKeyDemo}>
        类似 findKey，但从后向前遍历对象属性
      </div>
      <div className="button" onClick={edgeCaseDemo}>
        边界情况验证
      </div>
    </div>
  )
}

export default FindLastKeyDemo
