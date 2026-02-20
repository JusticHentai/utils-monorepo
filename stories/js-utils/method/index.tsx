import '../../.css/index.css'
import methodDemo from './methodDemo'
import methodOfDemo from './methodOfDemo'

const MethodDemo = () => {
  return (
    <div>
      <div className="button" onClick={methodDemo}>
        method 调用
      </div>
      <div className="button" onClick={methodOfDemo}>
        methodOf 调用
      </div>
    </div>
  )
}

export default MethodDemo
