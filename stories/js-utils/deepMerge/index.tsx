import '../../.css/index.css'
import arrayDemo from './arrayDemo'
import normalDemo from './normalDemo'
import typeDemo from './typeDemo'

const deepMergeDemo = () => {
  return (
    <div>
      <div className="button" onClick={normalDemo}>
        对象合并
      </div>
      <div className="button" onClick={arrayDemo}>
        数组合并
      </div>
      <div className="button" onClick={typeDemo}>
        类型推断
      </div>
    </div>
  )
}

export default deepMergeDemo
