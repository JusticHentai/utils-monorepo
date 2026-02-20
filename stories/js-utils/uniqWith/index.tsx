import '../../.css/index.css'
import edgeCaseDemo from './edgeCaseDemo'
import uniqWithDemo from './uniqWithDemo'

const UniqWithDemo = () => {
  return (
    <div>
      <div className="button" onClick={uniqWithDemo}>
        根据比较函数去重
      </div>
      <div className="button" onClick={edgeCaseDemo}>
        边界情况验证
      </div>
    </div>
  )
}

export default UniqWithDemo
