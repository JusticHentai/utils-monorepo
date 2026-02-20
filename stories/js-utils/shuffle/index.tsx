import '../../.css/index.css'
import edgeCaseDemo from './edgeCaseDemo'
import shuffleDemo from './shuffleDemo'

const ShuffleDemo = () => {
  return (
    <div>
      <div className="button" onClick={shuffleDemo}>
        打乱数组
      </div>
      <div className="button" onClick={edgeCaseDemo}>
        边界情况验证
      </div>
    </div>
  )
}

export default ShuffleDemo
