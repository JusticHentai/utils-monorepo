import '../../.css/index.css'
import basicDemo from './basicDemo'
import multiDemo from './multiDemo'
import sortByDemo from './sortByDemo'

const OrderByDemo = () => {
  return (
    <div>
      <div className="button" onClick={basicDemo}>
        orderBy - 基础排序
      </div>
      <div className="button" onClick={multiDemo}>
        orderBy - 多条件排序
      </div>
      <div className="button" onClick={sortByDemo}>
        sortBy - 简化排序
      </div>
    </div>
  )
}

export default OrderByDemo
