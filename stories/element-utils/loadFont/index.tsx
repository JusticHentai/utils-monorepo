import '../../.css/index.css'
import basicDemo from './basicDemo'

const LoadFontDemo = () => {
  return (
    <div>
      <div className="button" onClick={basicDemo}>
        加载 Roboto 字体
      </div>
    </div>
  )
}

export default LoadFontDemo
