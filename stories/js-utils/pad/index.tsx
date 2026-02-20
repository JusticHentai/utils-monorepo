import '../../.css/index.css'
import padDemo from './padDemo'
import padStartEndDemo from './padStartEndDemo'

const PadDemo = () => {
  return (
    <div>
      <div className="button" onClick={padDemo}>
        pad 双侧填充
      </div>
      <div className="button" onClick={padStartEndDemo}>
        padStart / padEnd
      </div>
    </div>
  )
}

export default PadDemo
