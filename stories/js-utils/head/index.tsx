import '../../.css/index.css'
import headDemo from './headDemo'
import firstDemo from './firstDemo'

const HeadDemo = () => {
  return (
    <div>
      <div className="button" onClick={headDemo}>
        head - 获取第一个元素
      </div>
      <div className="button" onClick={firstDemo}>
        first - head 的别名
      </div>
    </div>
  )
}

export default HeadDemo
