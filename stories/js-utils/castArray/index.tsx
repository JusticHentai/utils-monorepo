import '../../.css/index.css'
import basicDemo from './basicDemo'
import arrayDemo from './arrayDemo'

const CastArrayDemo = () => {
  return (
    <div>
      <div className="button" onClick={basicDemo}>
        castArray - 非数组转数组
      </div>
      <div className="button" onClick={arrayDemo}>
        castArray - 数组保持不变
      </div>
    </div>
  )
}

export default CastArrayDemo
