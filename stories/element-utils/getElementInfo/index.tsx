import '../../.css/index.css'
import basicDemo from './basicDemo'
import maxLengthDemo from './maxLengthDemo'
import invalidDemo from './invalidDemo'

const GetElementInfoDemo = () => {
  return (
    <div>
      <div className="button" onClick={basicDemo}>
        获取元素基础信息
      </div>
      <div className="button" onClick={maxLengthDemo}>
        自定义文本截断长度
      </div>
      <div className="button" onClick={invalidDemo}>
        传入非法值
      </div>

      <div className="area flex">
        <div id="target-with-id" className="card">
          目标元素
        </div>
        <div id="target-long-text" className="card">
          这是一段较长的文本内容，用于演示 innerText 截断功能，当文本超过指定的最大长度时会被自动截断处理
        </div>
      </div>
    </div>
  )
}

export default GetElementInfoDemo
