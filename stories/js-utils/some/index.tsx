import '../../.css/index.css'
import edgeCaseDemo from './edgeCaseDemo'
import someDemo from './someDemo'

const SomeDemo = () => {
  return (
    <div>
      <div className="button" onClick={someDemo}>
        检测集合中是否有任何元素满足谓词函数
      </div>
      <div className="button" onClick={edgeCaseDemo}>
        边界情况验证
      </div>
    </div>
  )
}

export default SomeDemo
