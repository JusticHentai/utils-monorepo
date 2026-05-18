import '../../.css/index.css'
import circularDemo from './circularDemo'
import primitiveDemo from './primitiveDemo'

const SafeStringifyDemo = () => {
  return (
    <div>
      <div className="button" onClick={primitiveDemo}>
        基础值序列化
      </div>
      <div className="button" onClick={circularDemo}>
        循环引用序列化
      </div>
    </div>
  )
}

export default SafeStringifyDemo
