import { action } from 'storybook/actions'
import '../../../.css/index.css'
import normalDemo from './normalDemo'

const TrapDemo = () => {
  return (
    <div>
      <div
        className="storybook-button storybook-button-gap"
        onClick={() => {
          const res = normalDemo()
          action('接雨水')(res)
        }}
      >
        接雨水测试
      </div>
    </div>
  )
}

export default TrapDemo
