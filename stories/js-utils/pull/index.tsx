import '../../.css/index.css'
import pullDemo from './pullDemo'
import pullAtDemo from './pullAtDemo'

const PullDemo = () => {
  return (
    <div>
      <div className="button" onClick={pullDemo}>
        pull / pullAll
      </div>
      <div className="button" onClick={pullAtDemo}>
        pullAt 按索引
      </div>
    </div>
  )
}

export default PullDemo
