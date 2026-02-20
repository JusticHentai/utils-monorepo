import '../../.css/index.css'
import edgeCaseDemo from './edgeCaseDemo'
import unzipWithDemo from './unzipWithDemo'

const UnzipWithDemo = () => {
  return (
    <div>
      <div className="button" onClick={unzipWithDemo}>
        类似于 unzip，但可以指定如何重新组合元素
      </div>
      <div className="button" onClick={edgeCaseDemo}>
        边界情况验证
      </div>
    </div>
  )
}

export default UnzipWithDemo
