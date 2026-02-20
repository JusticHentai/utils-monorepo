import '../../.css/index.css'
import edgeCaseDemo from './edgeCaseDemo'
import sortedUniqDemo from './sortedUniqDemo'

const SortedUniqDemo = () => {
  return (
    <div>
      <div className="button" onClick={sortedUniqDemo}>
        排序去重
      </div>
      <div className="button" onClick={edgeCaseDemo}>
        边界情况验证
      </div>
    </div>
  )
}

export default SortedUniqDemo
