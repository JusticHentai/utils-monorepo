import '../../.css/index.css'
import basicDemo from './basicDemo'
import errorDemo from './errorDemo'

const LoadImageDemo = () => {
  return (
    <div>
      <div className="button" onClick={basicDemo}>
        加载图片（成功）
      </div>
      <div className="button" onClick={errorDemo}>
        加载图片（失败）
      </div>
    </div>
  )
}

export default LoadImageDemo
