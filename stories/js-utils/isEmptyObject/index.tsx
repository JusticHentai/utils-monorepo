import '../../.css/index.css'
import emptyDemo from './emptyDemo'
import notEmptyDemo from './notEmptyDemo'
import notObjectDemo from './notObjectDemo'

const isEmptyObjectDemo = () => {
  return (
    <div>
      <div className="button" onClick={emptyDemo}>
        检测空对象 {`{}`}
      </div>
      <div className="button" onClick={notEmptyDemo}>
        检测非空对象 {`{ a: 1 }`}
      </div>
      <div className="button" onClick={notObjectDemo}>
        检测数组 {`[]`}
      </div>
    </div>
  )
}

export default isEmptyObjectDemo
