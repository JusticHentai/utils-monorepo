import '../../.css/index.css'
import normalDemo from './normalDemo'

const sleepDemo = () => {
  return (
    <div>
      <div className="button" onClick={normalDemo}>
        睡眠 1 秒
      </div>
    </div>
  )
}

export default sleepDemo
