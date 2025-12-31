import { action } from 'storybook/actions'
import '../../../.css/index.css'
import normalDemo from './normalDemo'

const SchedulerDemo = () => {
  return (
    <div>
      <div
        className="storybook-button storybook-button-gap"
        onClick={async () => {
          const res = await normalDemo()
          action('并发调度器')(res)
        }}
      >
        并发调度器测试（等待约2秒）
      </div>
    </div>
  )
}

export default SchedulerDemo
