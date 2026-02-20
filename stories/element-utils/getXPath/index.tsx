import '../../.css/index.css'
import { createBasicDemo } from './basicDemo'
import { createIdDemo } from './idDemo'

const GetXPathDemo = () => {
  return (
    <div>
      <div className="area">
        <div id="xpath-basic-container">
          <ul>
            <li>列表项 1</li>
            <li id="target-li">列表项 2 (目标元素)</li>
            <li>列表项 3</li>
          </ul>
        </div>
      </div>
      <div className="button" onClick={createBasicDemo('xpath-basic-container')}>
        获取普通元素 XPath
      </div>

      <div className="area">
        <div id="xpath-id-container">
          <span>子元素</span>
        </div>
      </div>
      <div className="button" onClick={createIdDemo('xpath-id-container')}>
        获取带 ID 元素 XPath
      </div>
    </div>
  )
}

export default GetXPathDemo
