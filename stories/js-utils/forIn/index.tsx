import '../../.css/index.css'
import forInDemo from './forInDemo'
import forOwnDemo from './forOwnDemo'

const ForInDemo = () => {
  return (
    <div>
      <div className="button" onClick={forInDemo}>
        forIn - 遍历包括继承属性
      </div>
      <div className="button" onClick={forOwnDemo}>
        forOwn - 仅遍历自有属性
      </div>
    </div>
  )
}

export default ForInDemo
