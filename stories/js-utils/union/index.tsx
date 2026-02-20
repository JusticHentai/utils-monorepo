import '../../.css/index.css'
import unionDemo from './unionDemo'
import unionByDemo from './unionByDemo'

const UnionDemo = () => {
  return (
    <div>
      <div className="button" onClick={unionDemo}>
        union 并集
      </div>
      <div className="button" onClick={unionByDemo}>
        unionBy / unionWith
      </div>
    </div>
  )
}

export default UnionDemo
