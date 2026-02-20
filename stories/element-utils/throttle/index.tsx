import '../../.css/index.css'
import basicDemo from './basicDemo'
import immediateDemo from './immediateDemo'

const ThrottleDemo = () => {
  return (
    <div>
      <div className="button" onClick={basicDemo}>
        节流函数（延迟执行）
      </div>
      <div className="button" onClick={immediateDemo}>
        节流函数（立即执行）
      </div>
    </div>
  )
}

export default ThrottleDemo
