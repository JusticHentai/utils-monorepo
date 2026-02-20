import '../../.css/index.css'
import basicDemo from './basicDemo'
import nestedDemo from './nestedDemo'

const AtDemo = () => {
  return (
    <div>
      <div className="button" onClick={basicDemo}>
        at - 基础路径取值
      </div>
      <div className="button" onClick={nestedDemo}>
        at - 深层嵌套路径
      </div>
    </div>
  )
}

export default AtDemo
