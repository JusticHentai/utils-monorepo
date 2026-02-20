import '../../.css/index.css'
import edgeCaseDemo from './edgeCaseDemo'
import invertByDemo from './invertByDemo'

const InvertByDemo = () => {
  return (
    <div>
      <div className="button" onClick={invertByDemo}>
        类似于 invert，但可以指定迭代器，且结果值是数组
      </div>
      <div className="button" onClick={edgeCaseDemo}>
        边界情况验证
      </div>
    </div>
  )
}

export default InvertByDemo
