import '../../.css/index.css'
import keysDemo from './keysDemo'
import valuesDemo from './valuesDemo'

const KeysDemo = () => {
  return (
    <div>
      <div className="button" onClick={keysDemo}>
        keys 获取键
      </div>
      <div className="button" onClick={valuesDemo}>
        values 获取值
      </div>
    </div>
  )
}

export default KeysDemo
