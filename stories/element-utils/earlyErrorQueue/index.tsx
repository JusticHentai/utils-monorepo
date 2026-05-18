import '../../.css/index.css'
import createBootstrapDemo from './bootstrapDemo'
import createFlushDemo from './flushDemo'
import queueDemo from './queueDemo'

const bootstrapDemo = createBootstrapDemo()
const flushDemo = createFlushDemo()

const EarlyErrorQueueDemo = () => {
  return (
    <div>
      <div className="button" onClick={queueDemo}>
        队列去重和限制
      </div>
      <div className="button" onClick={bootstrapDemo}>
        模拟 inline bootstrap
      </div>
      <div className="button" onClick={flushDemo}>
        接管并 flush
      </div>
    </div>
  )
}

export default EarlyErrorQueueDemo
