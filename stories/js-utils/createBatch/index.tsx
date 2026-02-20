import '../../.css/index.css'
import batchDelayDemo from './batchDelayDemo'
import batchOverflowDemo from './batchOverflowDemo'
import batchSizeDemo from './batchSizeDemo'
import flushDemo from './flushDemo'

const CreateBatchDemo = () => {
  return (
    <div>
      <div className="button" onClick={batchSizeDemo}>
        批次大小触发
      </div>
      <div className="button" onClick={batchOverflowDemo}>
        超过大小立即触发
      </div>
      <div className="button" onClick={batchDelayDemo}>
        延迟时间触发
      </div>
      <div className="button" onClick={flushDemo}>
        手动刷新批次
      </div>
    </div>
  )
}

export default CreateBatchDemo
