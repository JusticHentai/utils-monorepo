import { action } from 'storybook/actions'
import '../../../.css/index.css'
import normalDemo from './normalDemo'

const MyPromiseResolveDemo = () => {
  return (
    <div>
      <div
        className="storybook-button storybook-button-gap"
        onClick={async () => {
          const res = await normalDemo()
          action('Promise.resolve')(res)
        }}
      >
        Promise.resolve 测试
      </div>
    </div>
  )
}

export default MyPromiseResolveDemo
