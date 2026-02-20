import '../../.css/index.css'
import edgeCaseDemo from './edgeCaseDemo'
import pullAllByDemo from './pullAllByDemo'

const PullAllByDemo = () => {
  return (
    <div>
      <div className="button" onClick={pullAllByDemo}>
        类似于 pullAll，但可以指定迭代器
      </div>
      <div className="button" onClick={edgeCaseDemo}>
        边界情况验证
      </div>
    </div>
  )
}

export default PullAllByDemo
