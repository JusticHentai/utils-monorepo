import '../../.css/index.css'
import edgeCaseDemo from './edgeCaseDemo'
import pullAtDemo from './pullAtDemo'

const PullAtDemo = () => {
  return (
    <div>
      <div className="button" onClick={pullAtDemo}>
        移除数组中指定索引的元素，并返回被移除的元素
      </div>
      <div className="button" onClick={edgeCaseDemo}>
        边界情况验证
      </div>
    </div>
  )
}

export default PullAtDemo
