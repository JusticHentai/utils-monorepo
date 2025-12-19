import { action } from 'storybook/actions'
import '../../.css/index.css'
import successDemo from './successDemo'
import timeoutDemo from './timeoutDemo'

const timeoutDemoComponent = () => {
  return (
    <div>
      <div
        className="storybook-button storybook-button-gap"
        onClick={async () => {
          const res = await successDemo()

          action('异步函数先完成')(res)
        }}
      >
        异步函数先完成
      </div>
      <div
        className="storybook-button"
        onClick={async () => {
          const res = await timeoutDemo()

          action('超时先完成')(res)
        }}
      >
        超时先完成
      </div>
    </div>
  )
}

export default timeoutDemoComponent
