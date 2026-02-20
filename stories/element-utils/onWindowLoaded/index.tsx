import '../../.css/index.css'
import basicDemo from './basicDemo'

const OnWindowLoadedDemo = () => {
  return (
    <div>
      <div className="button" onClick={basicDemo}>
        监听窗口加载完成
      </div>
    </div>
  )
}

export default OnWindowLoadedDemo
