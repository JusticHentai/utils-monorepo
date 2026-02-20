import '../../.css/index.css'
import basicDemo from './basicDemo'
import extendedDemo from './extendedDemo'

const DeburrDemo = () => {
  return (
    <div>
      <div className="button" onClick={basicDemo}>
        deburr - 基础去音标
      </div>
      <div className="button" onClick={extendedDemo}>
        扩展字符与应用
      </div>
    </div>
  )
}

export default DeburrDemo
