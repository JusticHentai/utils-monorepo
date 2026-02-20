import '../../.css/index.css'
import edgeCaseDemo from './edgeCaseDemo'
import errorDemo from './errorDemo'

const IsErrorDemo = () => {
  return (
    <div>
      <div className="button" onClick={errorDemo}>
        isError - 类型检测
      </div>
      <div className="button" onClick={edgeCaseDemo}>
        边界情况验证
      </div>
    </div>
  )
}

export default IsErrorDemo
