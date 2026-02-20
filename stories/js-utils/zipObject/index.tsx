import '../../.css/index.css'
import edgeCaseDemo from './edgeCaseDemo'
import zipObjectDemo from './zipObjectDemo'

const ZipObjectDemo = () => {
  return (
    <div>
      <div className="button" onClick={zipObjectDemo}>
        类似于 fromPairs，但接受两个数组
      </div>
      <div className="button" onClick={edgeCaseDemo}>
        边界情况验证
      </div>
    </div>
  )
}

export default ZipObjectDemo
