import '../../.css/index.css'
import basicDemo from './basicDemo'
import defaultDemo from './defaultDemo'

const GetDemo = () => {
  return (
    <div>
      <div className="button" onClick={basicDemo}>
        get - 路径访问
      </div>
      <div className="button" onClick={defaultDemo}>
        get - 默认值与边界
      </div>
    </div>
  )
}

export default GetDemo
