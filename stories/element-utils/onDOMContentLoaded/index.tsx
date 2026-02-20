import '../../.css/index.css'
import basicDemo from './basicDemo'

const OnDOMContentLoadedDemo = () => {
  return (
    <div>
      <div className="button" onClick={basicDemo}>
        监听 DOMContentLoaded
      </div>
    </div>
  )
}

export default OnDOMContentLoadedDemo
