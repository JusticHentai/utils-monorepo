import '../../.css/index.css'
import sampleDemo from './sampleDemo'
import sampleSizeDemo from './sampleSizeDemo'

const SampleDemo = () => {
  return (
    <div>
      <div className="button" onClick={sampleDemo}>
        随机取一个
      </div>
      <div className="button" onClick={sampleSizeDemo}>
        随机取多个
      </div>
    </div>
  )
}

export default SampleDemo
