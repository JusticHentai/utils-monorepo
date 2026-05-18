import '../../.css/index.css'
import basicDemo from './basicDemo'

const SupportFetchDemo = () => {
  return (
    <div>
      <div className="button" onClick={basicDemo}>
        检测 fetch 支持
      </div>
    </div>
  )
}

export default SupportFetchDemo
