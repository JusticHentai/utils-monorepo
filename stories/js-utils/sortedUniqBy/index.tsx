import '../../.css/index.css'
import edgeCaseDemo from './edgeCaseDemo'
import sortedUniqByDemo from './sortedUniqByDemo'

const SortedUniqByDemo = () => {
  return (
    <div>
      <div className="button" onClick={sortedUniqByDemo}>
        类似于 sortedUniq，但可以指定迭代器
      </div>
      <div className="button" onClick={edgeCaseDemo}>
        边界情况验证
      </div>
    </div>
  )
}

export default SortedUniqByDemo
