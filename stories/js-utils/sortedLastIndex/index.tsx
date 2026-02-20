import '../../.css/index.css'
import edgeCaseDemo from './edgeCaseDemo'
import sortedLastIndexDemo from './sortedLastIndexDemo'

const SortedLastIndexDemo = () => {
  return (
    <div>
      <div className="button" onClick={sortedLastIndexDemo}>
        类似于 sortedIndex，但返回最高索引位置
      </div>
      <div className="button" onClick={edgeCaseDemo}>
        边界情况验证
      </div>
    </div>
  )
}

export default SortedLastIndexDemo
