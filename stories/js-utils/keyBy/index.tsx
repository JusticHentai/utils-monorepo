import '../../.css/index.css'
import keyByDemo from './keyByDemo'
import edgeCaseDemo from './edgeCaseDemo'

const KeyByDemo = () => {
  return (
    <div>
      <div className="button" onClick={keyByDemo}>
        keyBy 基础用法
      </div>
      <div className="button" onClick={edgeCaseDemo}>
        边界情况
      </div>
    </div>
  )
}

export default KeyByDemo