import '../../.css/index.css'
import basicDemo from './basicDemo'
import passiveDemo from './passiveDemo'
import onceDemo from './onceDemo'
import keyboardDemo from './keyboardDemo'

const CreateEventListenerDemo = () => {
  return (
    <div>
      <h3>基础用法</h3>
      <div className="button" onClick={basicDemo}>
        监听 resize 事件
      </div>

      <h3>passive 优化</h3>
      <div className="button" onClick={passiveDemo}>
        监听 scroll（passive）
      </div>

      <h3>一次性监听</h3>
      <div className="button" onClick={onceDemo}>
        监听 click（once）
      </div>

      <h3>键盘事件</h3>
      <div className="button" onClick={keyboardDemo}>
        监听 keydown
      </div>
    </div>
  )
}

export default CreateEventListenerDemo
