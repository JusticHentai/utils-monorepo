import '../../.css/index.css'
import edgeCaseDemo from './edgeCaseDemo'
import sortedIndexOfDemo from './sortedIndexOfDemo'

const SortedIndexOfDemo = () => {
  return (
    <div>
      <div className="button" onClick={sortedIndexOfDemo}>
        类似于 indexOf，但使用二分查找（数组必须已排序）
      </div>
      <div className="button" onClick={edgeCaseDemo}>
        边界情况验证
      </div>
    </div>
  )
}

export default SortedIndexOfDemo
