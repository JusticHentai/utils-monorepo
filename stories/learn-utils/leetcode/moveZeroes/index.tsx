import { action } from 'storybook/actions'
import '../../../.css/index.css'
import normalDemo from './normalDemo'

const moveZeroesDemo = () => {
  return (
    <div>
      <div
        className="storybook-button storybook-button-gap"
        onClick={() => {
          const res = normalDemo()
          action('移动零')(res)
        }}
      >
        移动零测试
      </div>
    </div>
  )
}

export default moveZeroesDemo
