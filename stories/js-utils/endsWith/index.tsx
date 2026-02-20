import '../../.css/index.css'
import endsWithDemo from './endsWithDemo'
import startsWithDemo from './startsWithDemo'

const EndsWithDemo = () => {
  return (
    <div>
      <div className="button" onClick={endsWithDemo}>
        endsWith - 检查结尾
      </div>
      <div className="button" onClick={startsWithDemo}>
        startsWith - 检查开头
      </div>
    </div>
  )
}

export default EndsWithDemo
