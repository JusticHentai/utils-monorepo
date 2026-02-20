import '../../.css/index.css'
import edgeCaseDemo from './edgeCaseDemo'
import overArgsDemo from './overArgsDemo'

const OverArgsDemo = () => {
  return (
    <div>
      <div className="button" onClick={overArgsDemo}>
        参数转换
      </div>
      <div className="button" onClick={edgeCaseDemo}>
        边界情况验证
      </div>
    </div>
  )
}

export default OverArgsDemo
