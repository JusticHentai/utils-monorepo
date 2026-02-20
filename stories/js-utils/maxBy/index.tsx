import '../../.css/index.css'
import edgeCaseDemo from './edgeCaseDemo'
import maxByDemo from './maxByDemo'

const MaxByDemo = () => {
  return (
    <div>
      <div className="button" onClick={maxByDemo}>
        类似于 max，但可以指定迭代器
      </div>
      <div className="button" onClick={edgeCaseDemo}>
        边界情况验证
      </div>
    </div>
  )
}

export default MaxByDemo
