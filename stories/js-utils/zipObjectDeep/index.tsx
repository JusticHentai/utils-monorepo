import '../../.css/index.css'
import edgeCaseDemo from './edgeCaseDemo'
import zipObjectDeepDemo from './zipObjectDeepDemo'

const ZipObjectDeepDemo = () => {
  return (
    <div>
      <div className="button" onClick={zipObjectDeepDemo}>
        类似于 zipObject，但支持属性路径
      </div>
      <div className="button" onClick={edgeCaseDemo}>
        边界情况验证
      </div>
    </div>
  )
}

export default ZipObjectDeepDemo
