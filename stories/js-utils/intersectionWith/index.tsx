import '../../.css/index.css'
import edgeCaseDemo from './edgeCaseDemo'
import intersectionWithDemo from './intersectionWithDemo'

const IntersectionWithDemo = () => {
  return (
    <div>
      <div className="button" onClick={intersectionWithDemo}>
        根据比较函数进行交集运算
      </div>
      <div className="button" onClick={edgeCaseDemo}>
        边界情况验证
      </div>
    </div>
  )
}

export default IntersectionWithDemo
