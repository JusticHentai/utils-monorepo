import { action } from 'storybook/actions'
import '../../../.css/index.css'
import normalDemo from './normalDemo'

const MinStackDemo = () => {
  return (
    <div>
      <div
        className="storybook-button storybook-button-gap"
        onClick={() => {
          const res = normalDemo()
          action('最小栈')(res)
        }}
      >
        最小栈测试
      </div>
    </div>
  )
}

export default MinStackDemo
