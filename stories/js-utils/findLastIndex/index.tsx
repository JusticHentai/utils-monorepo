import '../../.css/index.css'
import edgeCaseDemo from './edgeCaseDemo'
import findLastIndexDemo from './findLastIndexDemo'

const FindLastIndexDemo = () => {
  return (
    <div>
      <div className="button" onClick={findLastIndexDemo}>
        类似 findIndex，但从右到左遍历数组
      </div>
      <div className="button" onClick={edgeCaseDemo}>
        边界情况验证
      </div>
    </div>
  )
}

export default FindLastIndexDemo
