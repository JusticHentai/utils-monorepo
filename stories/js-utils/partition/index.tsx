import '../../.css/index.css'
import edgeCaseDemo from './edgeCaseDemo'
import partitionDemo from './partitionDemo'

const PartitionDemo = () => {
  return (
    <div>
      <div className="button" onClick={partitionDemo}>
        条件分组
      </div>
      <div className="button" onClick={edgeCaseDemo}>
        边界情况验证
      </div>
    </div>
  )
}

export default PartitionDemo
