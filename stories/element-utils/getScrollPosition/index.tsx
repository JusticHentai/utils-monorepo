import '../../.css/index.css'
import windowScrollDemo from './windowScrollDemo'
import elementScrollDemo from './elementScrollDemo'

const GetScrollPositionDemo = () => {
  return (
    <div>
      <div className="button" onClick={windowScrollDemo}>
        获取 Window 滚动位置
      </div>
      <div className="button" onClick={elementScrollDemo}>
        获取 Element 滚动位置
      </div>

      <div className="area">
        <div
          id="scroll-container"
          className="scroll-container"
          style={{ width: '300px', height: '200px' }}
        >
          <div style={{ width: '600px', height: '400px', padding: '20px' }}>
            <p>这是一个可滚动的容器</p>
            <p>宽度: 600px, 高度: 400px</p>
            <p>请滚动后点击按钮查看位置</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GetScrollPositionDemo
