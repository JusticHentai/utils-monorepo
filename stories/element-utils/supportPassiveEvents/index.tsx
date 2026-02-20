import '../../.css/index.css'
import basicDemo from './basicDemo'

const SupportPassiveEventsDemo = () => {
  return (
    <div>
      <div className="button" onClick={basicDemo}>
        检测 Passive Events 支持
      </div>
    </div>
  )
}

export default SupportPassiveEventsDemo
