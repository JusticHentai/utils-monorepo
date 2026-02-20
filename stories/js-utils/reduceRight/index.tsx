import '../../.css/index.css'
import edgeCaseDemo from './edgeCaseDemo'
import reduceRightDemo from './reduceRightDemo'

const ReduceRightDemo = () => {
  return (
    <div>
      <div className="button" onClick={reduceRightDemo}>
        从右到左遍历集合中的元素，每次迭代返回累积值
      </div>
      <div className="button" onClick={edgeCaseDemo}>
        边界情况验证
      </div>
    </div>
  )
}

export default ReduceRightDemo
