import '../../.css/index.css'
import edgeCaseDemo from './edgeCaseDemo'
import timesDemo from './timesDemo'

const TimesDemo = () => {
  return (
    <div>
      <div className="button" onClick={timesDemo}>
        重复执行
      </div>
      <div className="button" onClick={edgeCaseDemo}>
        边界情况验证
      </div>
    </div>
  )
}

export default TimesDemo
