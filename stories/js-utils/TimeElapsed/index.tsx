import '../../.css/index.css'
import normalDemo from './normalDemo'
import directSetDemo from './directSetDemo'

const TimeElapsedDemo = () => {
  return (
    <div>
      <div className="button" onClick={normalDemo}>
        常规使用
      </div>
      <div className="button" onClick={directSetDemo}>
        直接 set 使用
      </div>
    </div>
  )
}

export default TimeElapsedDemo
