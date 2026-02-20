import '../../.css/index.css'
import edgeCaseDemo from './edgeCaseDemo'
import pullAllWithDemo from './pullAllWithDemo'

const PullAllWithDemo = () => {
  return (
    <div>
      <div className="button" onClick={pullAllWithDemo}>
        类似于 pullAll，但可以指定比较器
      </div>
      <div className="button" onClick={edgeCaseDemo}>
        边界情况验证
      </div>
    </div>
  )
}

export default PullAllWithDemo
