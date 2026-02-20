import '../../.css/index.css'
import findDemo from './findDemo'
import findLastDemo from './findLastDemo'

const FindDemo = () => {
  return (
    <div>
      <div className="button" onClick={findDemo}>
        find - 查找第一个匹配
      </div>
      <div className="button" onClick={findLastDemo}>
        findLast - 从右查找
      </div>
    </div>
  )
}

export default FindDemo
