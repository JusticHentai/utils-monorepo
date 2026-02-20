import '../../.css/index.css'
import windowDemo from './windowDemo'
import notWindowDemo from './notWindowDemo'

const isWindowDemo = () => {
  return (
    <div>
      <div className="button" onClick={windowDemo}>
        检测 window 对象
      </div>
      <div className="button" onClick={notWindowDemo}>
        检测普通对象 {`{}`}
      </div>
    </div>
  )
}

export default isWindowDemo
