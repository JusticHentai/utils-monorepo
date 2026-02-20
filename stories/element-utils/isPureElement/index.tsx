import '../../.css/index.css'
import numberDemo from './numberDemo'
import reactElementDemo from './objectDemo'
import stringDemo from './stringDemo'

const IsPureElementDemo = () => {
  return (
    <div>
      <div className="button" onClick={stringDemo}>
        判断字符串
      </div>
      <div className="button" onClick={numberDemo}>
        判断数字
      </div>
      <div className="button" onClick={reactElementDemo}>
        判断 React 元素
      </div>
    </div>
  )
}

export default IsPureElementDemo
