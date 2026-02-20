import '../../.css/index.css'
import edgeCaseDemo from './edgeCaseDemo'
import unionWithDemo from './unionWithDemo'

const UnionWithDemo = () => {
  return (
    <div>
      <div className="button" onClick={unionWithDemo}>
        类似于 union，但可以指定比较器
      </div>
      <div className="button" onClick={edgeCaseDemo}>
        边界情况验证
      </div>
    </div>
  )
}

export default UnionWithDemo
