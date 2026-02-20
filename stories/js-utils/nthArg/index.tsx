import '../../.css/index.css'
import edgeCaseDemo from './edgeCaseDemo'
import nthArgDemo from './nthArgDemo'

const NthArgDemo = () => {
  return (
    <div>
      <div className="button" onClick={nthArgDemo}>
        参数选择
      </div>
      <div className="button" onClick={edgeCaseDemo}>
        边界情况验证
      </div>
    </div>
  )
}

export default NthArgDemo
