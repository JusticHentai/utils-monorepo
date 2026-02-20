import '../../.css/index.css'
import basicDemo from './basicDemo'
import complexDemo from './complexDemo'

const CondDemo = () => {
  return (
    <div>
      <div className="button" onClick={basicDemo}>
        cond - 基础条件分支
      </div>
      <div className="button" onClick={complexDemo}>
        复杂条件匹配
      </div>
    </div>
  )
}

export default CondDemo
