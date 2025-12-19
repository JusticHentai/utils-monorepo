import { action } from 'storybook/actions'
import '../../.css/index.css'
import normalDemo from './normalDemo'

const sleepDemo = () => {
  return (
    <div>
      <div
        className="storybook-button"
        onClick={async () => {
          action('开始睡眠 1 秒')()
          await normalDemo()
          action('睡眠完成')()
        }}
      >
        睡眠 1 秒
      </div>
    </div>
  )
}

export default sleepDemo
