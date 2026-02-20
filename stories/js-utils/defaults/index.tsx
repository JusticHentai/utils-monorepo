import '../../.css/index.css'
import defaultsDemo from './defaultsDemo'
import defaultsDeepDemo from './defaultsDeepDemo'

const DefaultsDemo = () => {
  return (
    <div>
      <div className="button" onClick={defaultsDemo}>
        defaults - 浅层默认值
      </div>
      <div className="button" onClick={defaultsDeepDemo}>
        defaultsDeep - 深层默认值
      </div>
    </div>
  )
}

export default DefaultsDemo
