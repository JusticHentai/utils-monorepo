import '../../.css/index.css'
import basicDemo from './basicDemo'
import customDemo from './customDemo'

const MergeDemo = () => {
  return (
    <div>
      <div className="button" onClick={basicDemo}>
        merge - 递归合并
      </div>
      <div className="button" onClick={customDemo}>
        mergeWith - 自定义合并
      </div>
    </div>
  )
}

export default MergeDemo
