import '../../.css/index.css'
import edgeCaseDemo from './edgeCaseDemo'
import nthDemo from './nthDemo'

const NthDemo = () => {
  return (
    <div>
      <div className="button" onClick={nthDemo}>
        获取元素
      </div>
      <div className="button" onClick={edgeCaseDemo}>
        边界情况验证
      </div>
    </div>
  )
}

export default NthDemo
