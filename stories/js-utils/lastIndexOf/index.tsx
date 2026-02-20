import '../../.css/index.css'
import edgeCaseDemo from './edgeCaseDemo'
import lastIndexOfDemo from './lastIndexOfDemo'

const LastIndexOfDemo = () => {
  return (
    <div>
      <div className="button" onClick={lastIndexOfDemo}>
        获取 value 在数组中最后一次出现的索引
      </div>
      <div className="button" onClick={edgeCaseDemo}>
        边界情况验证
      </div>
    </div>
  )
}

export default LastIndexOfDemo
