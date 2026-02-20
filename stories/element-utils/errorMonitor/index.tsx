import '../../.css/index.css'
import initDemo from './initDemo'
import resourceErrorDemo from './resourceErrorDemo'
import consoleErrorDemo from './consoleErrorDemo'
import errorFilterDemo from './errorFilterDemo'
import preCollectDemo from './preCollectDemo'

const ErrorMonitorDemo = () => {
  return (
    <div>
      <div className="button" onClick={initDemo}>
        基础监听
      </div>
      <div className="button" onClick={resourceErrorDemo}>
        资源错误监听
      </div>
      <div className="button" onClick={consoleErrorDemo}>
        Console 错误监听
      </div>
      <div className="button" onClick={errorFilterDemo}>
        错误过滤
      </div>
      <div className="button" onClick={preCollectDemo}>
        提前收集错误
      </div>
    </div>
  )
}

export default ErrorMonitorDemo
