import '../../.css/index.css'
import basicDemo from './basicDemo'
import measureDemo from './measureDemo'
import clearDemo from './clearDemo'

const PerformanceMarkDemo = () => {
  return (
    <div>
      <div className="button" onClick={basicDemo}>
        基础标记 (mark)
      </div>
      <div className="button" onClick={measureDemo}>
        测量耗时 (measure)
      </div>
      <div className="button" onClick={clearDemo}>
        清除标记和测量
      </div>
    </div>
  )
}

export default PerformanceMarkDemo
