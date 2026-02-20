import '../../.css/index.css'
import edgeCaseDemo from './edgeCaseDemo'
import valuesInDemo from './valuesInDemo'

const ValuesInDemo = () => {
  return (
    <div>
      <div className="button" onClick={valuesInDemo}>
        返回对象所有可枚举属性的值数组（包括继承的属性）
      </div>
      <div className="button" onClick={edgeCaseDemo}>
        边界情况验证
      </div>
    </div>
  )
}

export default ValuesInDemo
