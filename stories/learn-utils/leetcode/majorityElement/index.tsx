import { action } from 'storybook/actions'
import '../../../.css/index.css'
import normalDemo from './normalDemo'

const majorityElementDemo = () => {
  return (
    <div>
      <div
        className="storybook-button storybook-button-gap"
        onClick={() => {
          const res = normalDemo()
          action('多数元素')(res)
        }}
      >
        多数元素测试
      </div>
    </div>
  )
}

export default majorityElementDemo
