import '../../.css/index.css'
import basicDemo from './basicDemo'
import nestedDemo from './nestedDemo'

const ConcatDemo = () => {
  return (
    <div>
      <div className="button" onClick={basicDemo}>
        concat - 基础连接
      </div>
      <div className="button" onClick={nestedDemo}>
        嵌套与稀疏数组
      </div>
    </div>
  )
}

export default ConcatDemo
