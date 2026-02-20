import '../../.css/index.css'
import basicDemo from './basicDemo'
import deepDemo from './deepDemo'
import depthDemo from './depthDemo'

const FlattenDemo = () => {
  return (
    <div>
      <div className="button" onClick={basicDemo}>
        flatten - 展开一层
      </div>
      <div className="button" onClick={deepDemo}>
        flattenDeep - 完全展开
      </div>
      <div className="button" onClick={depthDemo}>
        flattenDepth - 指定深度
      </div>
    </div>
  )
}

export default FlattenDemo
