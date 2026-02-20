import '../../.css/index.css'
import debugDemo from './debugDemo'
import errorDemo from './errorDemo'
import infoDemo from './infoDemo'
import warnDemo from './warnDemo'

const loggerDemo = () => {
  return (
    <div>
      <div className="button" onClick={infoDemo}>
        info 日志
      </div>
      <div className="button" onClick={debugDemo}>
        debug 日志
      </div>
      <div className="button" onClick={warnDemo}>
        warn 日志
      </div>
      <div className="button" onClick={errorDemo}>
        error 日志
      </div>
    </div>
  )
}

export default loggerDemo
