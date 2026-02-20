import '../../.css/index.css'
import edgeCaseDemo from './edgeCaseDemo'
import valuesDemo from './valuesDemo'

const ValuesDemo = () => {
  return (
    <div>
      <div className="button" onClick={valuesDemo}>
        返回对象自有可枚举属性的值数组
      </div>
      <div className="button" onClick={edgeCaseDemo}>
        边界情况验证
      </div>
    </div>
  )
}

export default ValuesDemo
