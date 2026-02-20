import '../../.css/index.css'
import successDemo from './successDemo'
import timeoutDemo from './timeoutDemo'

const timeoutFormatDemoComponent = () => {
  return (
    <div>
      <div className="button" onClick={successDemo}>
        异步函数先完成
      </div>
      <div className="button" onClick={timeoutDemo}>
        超时先完成
      </div>
    </div>
  )
}

export default timeoutFormatDemoComponent
