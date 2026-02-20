import '../../.css/index.css'
import edgeCaseDemo from './edgeCaseDemo'
import forEachRightDemo from './forEachRightDemo'

const ForEachRightDemo = () => {
  return (
    <div>
      <div className="button" onClick={forEachRightDemo}>
        类似 forEach，但从右到左遍历集合
      </div>
      <div className="button" onClick={edgeCaseDemo}>
        边界情况验证
      </div>
    </div>
  )
}

export default ForEachRightDemo
