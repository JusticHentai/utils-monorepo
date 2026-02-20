import '../../.css/index.css'
import edgeCaseDemo from './edgeCaseDemo'
import sampleSizeDemo from './sampleSizeDemo'

const SampleSizeDemo = () => {
  return (
    <div>
      <div className="button" onClick={sampleSizeDemo}>
        从集合中随机获取 n 个元素
      </div>
      <div className="button" onClick={edgeCaseDemo}>
        边界情况验证
      </div>
    </div>
  )
}

export default SampleSizeDemo
