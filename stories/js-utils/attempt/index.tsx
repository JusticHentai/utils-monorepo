import '../../.css/index.css'
import successDemo from './successDemo'
import errorDemo from './errorDemo'

const AttemptDemo = () => {
  return (
    <div>
      <div className="button" onClick={successDemo}>
        attempt - 成功执行
      </div>
      <div className="button" onClick={errorDemo}>
        attempt - 错误捕获
      </div>
    </div>
  )
}

export default AttemptDemo
