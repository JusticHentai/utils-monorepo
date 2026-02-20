import '../../.css/index.css'
import takeDemo from './takeDemo'
import takeWhileDemo from './takeWhileDemo'

const TakeDemo = () => {
  return (
    <div>
      <div className="button" onClick={takeDemo}>
        take / takeRight
      </div>
      <div className="button" onClick={takeWhileDemo}>
        takeWhile 条件取
      </div>
    </div>
  )
}

export default TakeDemo
