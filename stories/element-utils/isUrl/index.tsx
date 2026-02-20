import '../../.css/index.css'
import basicDemo from './basicDemo'
import stringDemo from './stringDemo'

const IsUrlDemo = () => {
  return (
    <div>
      <div className="button" onClick={basicDemo}>
        检测 URL 实例
      </div>
      <div className="button" onClick={stringDemo}>
        检测非 URL 类型
      </div>
    </div>
  )
}

export default IsUrlDemo
