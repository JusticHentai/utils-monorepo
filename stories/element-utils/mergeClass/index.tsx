import '../../.css/index.css'
import basicDemo from './basicDemo'
import falsyDemo from './falsyDemo'

const MergeClassDemo = () => {
  return (
    <div>
      <div className="button" onClick={basicDemo}>
        合并多种类型 class
      </div>
      <div className="button" onClick={falsyDemo}>
        过滤 falsy 值
      </div>
    </div>
  )
}

export default MergeClassDemo
