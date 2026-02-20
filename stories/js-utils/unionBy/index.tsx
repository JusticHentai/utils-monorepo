import '../../.css/index.css'
import edgeCaseDemo from './edgeCaseDemo'
import unionByDemo from './unionByDemo'

const UnionByDemo = () => {
  return (
    <div>
      <div className="button" onClick={unionByDemo}>
        类似于 union，但可以指定迭代器
      </div>
      <div className="button" onClick={edgeCaseDemo}>
        边界情况验证
      </div>
    </div>
  )
}

export default UnionByDemo
