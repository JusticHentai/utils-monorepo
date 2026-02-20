import '../../.css/index.css'
import basicDemo from './basicDemo'
import overrideDemo from './overrideDemo'

const MergeQueryParamsDemo = () => {
  return (
    <div>
      <div className="button" onClick={basicDemo}>
        合并查询参数
      </div>
      <div className="button" onClick={overrideDemo}>
        覆盖同名参数
      </div>
    </div>
  )
}

export default MergeQueryParamsDemo
