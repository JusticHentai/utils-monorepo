import { action } from 'storybook/actions'
import '../../.css/index.css'
import notObjectDemo from './notObjectDemo'
import objectDemo from './objectDemo'

const isObjectDemo = () => {
  return (
    <div>
      <div
        className="storybook-button storybook-button-gap"
        onClick={() => {
          const res = objectDemo()

          action('检测对象 { a: 1 }')(res)
        }}
      >
        检测对象 {`{ a: 1 }`}
      </div>
      <div
        className="storybook-button"
        onClick={() => {
          const res = notObjectDemo()

          action('检测数组 [1, 2, 3]')(res)
        }}
      >
        检测数组 [1, 2, 3]
      </div>
    </div>
  )
}

export default isObjectDemo
