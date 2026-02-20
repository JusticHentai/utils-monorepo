import '../../.css/index.css'
import edgeCaseDemo from './edgeCaseDemo'
import sortedLastIndexByDemo from './sortedLastIndexByDemo'

const SortedLastIndexByDemo = () => {
  return (
    <div>
      <div className="button" onClick={sortedLastIndexByDemo}>
        类似于 sortedLastIndex，但可以指定迭代器
      </div>
      <div className="button" onClick={edgeCaseDemo}>
        边界情况验证
      </div>
    </div>
  )
}

export default SortedLastIndexByDemo
