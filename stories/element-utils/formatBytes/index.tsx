import '../../.css/index.css'
import autoUnitDemo from './autoUnitDemo'
import basicDemo from './basicDemo'

const FormatBytesDemo = () => {
  return (
    <div>
      <div className="button" onClick={basicDemo}>
        基础用法
      </div>
      <div className="button" onClick={autoUnitDemo}>
        自动单位选择
      </div>
    </div>
  )
}

export default FormatBytesDemo
