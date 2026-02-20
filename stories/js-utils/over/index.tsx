import '../../.css/index.css'
import overDemo from './overDemo'
import overEveryDemo from './overEveryDemo'

const OverDemo = () => {
  return (
    <div>
      <div className="button" onClick={overDemo}>
        over 调用
      </div>
      <div className="button" onClick={overEveryDemo}>
        overEvery / overSome
      </div>
    </div>
  )
}

export default OverDemo
