import '../../.css/index.css'
import objectDemo from './objectDemo'
import textDemo from './textDemo'

const EstimateBytesDemo = () => {
  return (
    <div>
      <div className="button" onClick={textDemo}>
        文本字节估算
      </div>
      <div className="button" onClick={objectDemo}>
        对象字节估算
      </div>
    </div>
  )
}

export default EstimateBytesDemo
