import '../../.css/index.css'
import basicDemo from './basicDemo'
import eventWaitDemo from './eventWaitDemo'
import imageLoadDemo from './imageLoadDemo'
import rejectDemo from './rejectDemo'

const createPromiseControllerDemo = () => {
  return (
    <div id="createPromiseControllerDemo">
      <div className="button" onClick={basicDemo}>
        基础用法演示
      </div>
      <div className="button" onClick={imageLoadDemo}>
        图片加载演示
      </div>
      <div className="button" onClick={rejectDemo}>
        Promise 拒绝演示
      </div>
      <div className="button" onClick={eventWaitDemo}>
        事件等待演示
      </div>
    </div>
  )
}

export default createPromiseControllerDemo
