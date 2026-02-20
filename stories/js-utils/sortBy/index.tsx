import '../../.css/index.css'
import edgeCaseDemo from './edgeCaseDemo'
import sortByDemo from './sortByDemo'

const SortByDemo = () => {
  return (
    <div>
      <div className="button" onClick={sortByDemo}>
        根据单个属性对集合进行排序
      </div>
      <div className="button" onClick={edgeCaseDemo}>
        边界情况验证
      </div>
    </div>
  )
}

export default SortByDemo
