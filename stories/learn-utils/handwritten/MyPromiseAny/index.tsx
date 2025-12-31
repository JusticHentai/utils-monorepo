import { action } from 'storybook/actions'
import '../../../.css/index.css'
import normalDemo from './normalDemo'

const MyPromiseAnyDemo = () => {
  return (
    <div>
      <div
        className="storybook-button storybook-button-gap"
        onClick={async () => {
          const res = await normalDemo()
          action('Promise.any 任一成功')(res)
        }}
      >
        Promise.any 任一成功测试
      </div>
    </div>
  )
}

export default MyPromiseAnyDemo
