import '../../.css/index.css'
import getSessionIdDemo from './getSessionIdDemo'

const SessionIdDemo = () => {
  return (
    <div>
      <div className="button" onClick={getSessionIdDemo}>
        获取会话ID
      </div>
    </div>
  )
}

export default SessionIdDemo
