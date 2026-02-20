import '../../.css/index.css'
import edgeCaseDemo from './edgeCaseDemo'
import sizeDemo from './sizeDemo'

const SizeDemo = () => {
  return (
    <div>
      <div className="button" onClick={sizeDemo}>
        获取大小
      </div>
      <div className="button" onClick={edgeCaseDemo}>
        边界情况验证
      </div>
    </div>
  )
}

export default SizeDemo
