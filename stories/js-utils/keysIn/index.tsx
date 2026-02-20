import '../../.css/index.css'
import edgeCaseDemo from './edgeCaseDemo'
import keysInDemo from './keysInDemo'

const KeysInDemo = () => {
  return (
    <div>
      <div className="button" onClick={keysInDemo}>
        返回对象所有可枚举属性的键名数组（包括继承的属性）
      </div>
      <div className="button" onClick={edgeCaseDemo}>
        边界情况验证
      </div>
    </div>
  )
}

export default KeysInDemo
