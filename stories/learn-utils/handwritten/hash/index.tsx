import { action } from 'storybook/actions'
import '../../../.css/index.css'
import normalDemo from './normalDemo'

const hashDemo = () => {
  return (
    <div>
      <div
        className="storybook-button storybook-button-gap"
        onClick={() => {
          const res = normalDemo()
          action('哈希表应用')(res)
        }}
      >
        哈希表应用测试
      </div>
    </div>
  )
}

export default hashDemo
