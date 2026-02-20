import '../../.css/index.css'
import edgeCaseDemo from './edgeCaseDemo'
import sortedIndexByDemo from './sortedIndexByDemo'

const SortedIndexByDemo = () => {
  return (
    <div>
      <div className="button" onClick={sortedIndexByDemo}>
        类似于 sortedIndex，但可以指定迭代器
      </div>
      <div className="button" onClick={edgeCaseDemo}>
        边界情况验证
      </div>
    </div>
  )
}

export default SortedIndexByDemo
