import { action } from 'storybook/actions'
import '../../../.css/index.css'
import normalDemo from './normalDemo'

const robDemo = () => {
  return (
    <div>
      <div
        className="storybook-button storybook-button-gap"
        onClick={() => {
          const res = normalDemo()
          action('打家劫舍')(res)
        }}
      >
        打家劫舍测试
      </div>
    </div>
  )
}

export default robDemo
