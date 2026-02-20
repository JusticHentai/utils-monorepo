import '../../.css/index.css'
import basicDemo from './basicDemo'
import edgeCaseDemo from './edgeCaseDemo'

const ChunkDemo = () => {
  return (
    <div>
      <div className="button" onClick={basicDemo}>
        chunk - 基础分块
      </div>
      <div className="button" onClick={edgeCaseDemo}>
        边界情况
      </div>
    </div>
  )
}

export default ChunkDemo
