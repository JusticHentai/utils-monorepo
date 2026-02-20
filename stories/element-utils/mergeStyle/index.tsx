import '../../.css/index.css'
import arrayDemo from './arrayDemo'
import basicDemo from './basicDemo'

const MergeStyleDemo = () => {
  return (
    <div>
      <div className="button" onClick={basicDemo}>
        合并样式对象
      </div>
      <div className="button" onClick={arrayDemo}>
        合并数组样式
      </div>
    </div>
  )
}

export default MergeStyleDemo
