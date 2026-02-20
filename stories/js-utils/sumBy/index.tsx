import '../../.css/index.css'
import edgeCaseDemo from './edgeCaseDemo'
import sumByDemo from './sumByDemo'

const SumByDemo = () => {
  return (
    <div>
      <div className="button" onClick={sumByDemo}>
        类似于 sum，但可以指定迭代器
      </div>
      <div className="button" onClick={edgeCaseDemo}>
        边界情况验证
      </div>
    </div>
  )
}

export default SumByDemo
