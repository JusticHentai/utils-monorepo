import '../../.css/index.css'
import edgeCaseDemo from './edgeCaseDemo'
import upperFirstDemo from './upperFirstDemo'

const UpperFirstDemo = () => {
  return (
    <div>
      <div className="button" onClick={upperFirstDemo}>
        将字符串首字母转换为大写，其余部分保持不变
      </div>
      <div className="button" onClick={edgeCaseDemo}>
        边界情况验证
      </div>
    </div>
  )
}

export default UpperFirstDemo
