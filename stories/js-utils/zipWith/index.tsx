import '../../.css/index.css'
import edgeCaseDemo from './edgeCaseDemo'
import zipWithDemo from './zipWithDemo'

const ZipWithDemo = () => {
  return (
    <div>
      <div className="button" onClick={zipWithDemo}>
        类似于 zip，但可以指定如何组合分组的值
      </div>
      <div className="button" onClick={edgeCaseDemo}>
        边界情况验证
      </div>
    </div>
  )
}

export default ZipWithDemo
