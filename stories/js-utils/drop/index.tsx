import '../../.css/index.css'
import dropDemo from './dropDemo'
import dropRightDemo from './dropRightDemo'
import dropWhileDemo from './dropWhileDemo'
import dropRightWhileDemo from './dropRightWhileDemo'

const DropDemo = () => {
  return (
    <div>
      <div className="button" onClick={dropDemo}>
        drop - 从开头移除
      </div>
      <div className="button" onClick={dropRightDemo}>
        dropRight - 从末尾移除
      </div>
      <div className="button" onClick={dropWhileDemo}>
        dropWhile - 条件移除开头
      </div>
      <div className="button" onClick={dropRightWhileDemo}>
        dropRightWhile - 条件移除末尾
      </div>
    </div>
  )
}

export default DropDemo
