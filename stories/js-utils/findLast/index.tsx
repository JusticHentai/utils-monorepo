import '../../.css/index.css'
import edgeCaseDemo from './edgeCaseDemo'
import findLastDemo from './findLastDemo'

const FindLastDemo = () => {
  return (
    <div>
      <div className="button" onClick={findLastDemo}>
        类似 find，但从右到左遍历集合
      </div>
      <div className="button" onClick={edgeCaseDemo}>
        边界情况验证
      </div>
    </div>
  )
}

export default FindLastDemo
