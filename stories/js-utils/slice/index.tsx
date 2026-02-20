import '../../.css/index.css'
import edgeCaseDemo from './edgeCaseDemo'
import sliceDemo from './sliceDemo'

const SliceDemo = () => {
  return (
    <div>
      <div className="button" onClick={sliceDemo}>
        数组切片
      </div>
      <div className="button" onClick={edgeCaseDemo}>
        边界情况验证
      </div>
    </div>
  )
}

export default SliceDemo
