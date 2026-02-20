import '../../.css/index.css'
import edgeCaseDemo from './edgeCaseDemo'
import sortedLastIndexOfDemo from './sortedLastIndexOfDemo'

const SortedLastIndexOfDemo = () => {
  return (
    <div>
      <div className="button" onClick={sortedLastIndexOfDemo}>
        类似于 lastIndexOf，但使用二分查找（数组必须已排序）
      </div>
      <div className="button" onClick={edgeCaseDemo}>
        边界情况验证
      </div>
    </div>
  )
}

export default SortedLastIndexOfDemo
