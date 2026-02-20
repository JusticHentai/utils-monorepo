import '../../.css/index.css'
import windowDemo from './windowDemo'
import elementDemo from './elementDemo'
import eventTargetDemo from './eventTargetDemo'

const IsScrollTargetDemo = () => {
  return (
    <div>
      <div className="button" onClick={windowDemo}>
        检测 Window 对象
      </div>
      <div className="button" onClick={elementDemo}>
        检测 Element 对象
      </div>
      <div className="button" onClick={eventTargetDemo}>
        检测其他 EventTarget
      </div>
    </div>
  )
}

export default IsScrollTargetDemo
