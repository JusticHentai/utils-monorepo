import '../../.css/index.css'
import findIndexDemo from './findIndexDemo'
import findLastIndexDemo from './findLastIndexDemo'

const FindIndexDemoComponent = () => {
  return (
    <div>
      <div className="button" onClick={findIndexDemo}>
        findIndex - 查找第一个匹配索引
      </div>
      <div className="button" onClick={findLastIndexDemo}>
        findLastIndex - 查找最后一个匹配索引
      </div>
    </div>
  )
}

export default FindIndexDemoComponent
