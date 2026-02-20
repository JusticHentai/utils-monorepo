import '../../.css/index.css'
import edgeCaseDemo from './edgeCaseDemo'
import numberDemo from './numberDemo'

const IsNumberDemo = () => {
  return (
    <div>
      <div className="button" onClick={numberDemo}>
        isNumber - 类型检测
      </div>
      <div className="button" onClick={edgeCaseDemo}>
        边界情况验证
      </div>
    </div>
  )
}

export default IsNumberDemo
