import { action } from 'storybook/actions'
import '../../../.css/index.css'
import normalDemo from './normalDemo'
import rejectDemo from './rejectDemo'

const MyPromiseDemo = () => {
  return (
    <div>
      <div
        className="storybook-button storybook-button-gap"
        onClick={async () => {
          const res = await normalDemo()
          action('MyPromise resolve')(res)
        }}
      >
        MyPromise resolve 测试
      </div>
      <div
        className="storybook-button storybook-button-gap"
        onClick={async () => {
          const res = await rejectDemo()
          action('MyPromise reject')(res)
        }}
      >
        MyPromise reject 测试
      </div>
    </div>
  )
}

export default MyPromiseDemo
