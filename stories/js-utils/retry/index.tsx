import { action } from 'storybook/actions'
import '../../.css/index.css'
import successDemo from './successDemo'
import failDemo from './failDemo'

const retryDemo = () => {
  return (
    <div>
      <div
        className="storybook-button storybook-button-gap"
        onClick={async () => {
          const res = await successDemo()

          action('重试成功用例')(res)
        }}
      >
        重试成功用例
      </div>
      <div
        className="storybook-button"
        onClick={async () => {
          const res = await failDemo()

          action('重试失败用例')(res)
        }}
      >
        重试失败用例
      </div>
    </div>
  )
}

export default retryDemo
