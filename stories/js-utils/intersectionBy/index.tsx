import '../../.css/index.css'
import edgeCaseDemo from './edgeCaseDemo'
import intersectionByDemo from './intersectionByDemo'

const IntersectionByDemo = () => {
  return (
    <div>
      <div className="button" onClick={intersectionByDemo}>
        根据迭代器返回值进行交集运算
      </div>
      <div className="button" onClick={edgeCaseDemo}>
        边界情况验证
      </div>
    </div>
  )
}

export default IntersectionByDemo
