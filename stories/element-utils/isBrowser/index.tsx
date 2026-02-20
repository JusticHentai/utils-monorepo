import '../../.css/index.css'
import basicDemo from './basicDemo'

const IsBrowserDemo = () => {
  return (
    <div>
      <div className="button" onClick={basicDemo}>
        检测当前环境
      </div>
    </div>
  )
}

export default IsBrowserDemo
