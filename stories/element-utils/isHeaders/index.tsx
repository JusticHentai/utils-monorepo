import '../../.css/index.css'
import basicDemo from './basicDemo'
import objectDemo from './objectDemo'

const IsHeadersDemo = () => {
  return (
    <div>
      <div className="button" onClick={basicDemo}>
        检测 Headers 实例
      </div>
      <div className="button" onClick={objectDemo}>
        检测非 Headers 类型
      </div>
    </div>
  )
}

export default IsHeadersDemo
