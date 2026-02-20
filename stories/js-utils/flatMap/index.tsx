import '../../.css/index.css'
import flatMapDemo from './flatMapDemo'
import flatMapDeepDemo from './flatMapDeepDemo'

const FlatMapDemo = () => {
  return (
    <div>
      <div className="button" onClick={flatMapDemo}>
        flatMap - 映射后扁平化一层
      </div>
      <div className="button" onClick={flatMapDeepDemo}>
        flatMapDeep - 完全扁平化
      </div>
    </div>
  )
}

export default FlatMapDemo
