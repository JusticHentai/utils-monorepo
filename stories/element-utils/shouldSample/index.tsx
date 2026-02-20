import '../../.css/index.css'
import basicDemo from './basicDemo'

const ShouldSampleDemo = () => {
  return (
    <div>
      <div className="button" onClick={basicDemo}>
        采样率测试
      </div>
    </div>
  )
}

export default ShouldSampleDemo
