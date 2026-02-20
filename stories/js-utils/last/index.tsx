import '../../.css/index.css'
import edgeCaseDemo from './edgeCaseDemo'
import basicDemo from './basicDemo'

const LastDemo = () => {
  return (
    <div>
      <div className="button" onClick={basicDemo}>
        获取最后一个元素
      </div>
      <div className="button" onClick={edgeCaseDemo}>
        边界情况验证
      </div>
    </div>
  )
}

export default LastDemo
