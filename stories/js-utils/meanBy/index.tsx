import '../../.css/index.css'
import edgeCaseDemo from './edgeCaseDemo'
import meanByDemo from './meanByDemo'

const MeanByDemo = () => {
  return (
    <div>
      <div className="button" onClick={meanByDemo}>
        类似于 mean，但可以指定迭代器
      </div>
      <div className="button" onClick={edgeCaseDemo}>
        边界情况验证
      </div>
    </div>
  )
}

export default MeanByDemo
