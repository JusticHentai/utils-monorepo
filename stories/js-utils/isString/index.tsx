import { action } from 'storybook/actions'
import '../../.css/index.css'
import notStringDemo from './notStringDemo'
import stringDemo from './stringDemo'

const isStringDemo = () => {
  return (
    <div>
      <div
        className="storybook-button storybook-button-gap"
        onClick={() => {
          const res = stringDemo()

          action('检测字符串 "hello"')(res)
        }}
      >
        检测字符串 "hello"
      </div>
      <div
        className="storybook-button"
        onClick={() => {
          const res = notStringDemo()

          action('检测数字 123')(res)
        }}
      >
        检测数字 123
      </div>
    </div>
  )
}

export default isStringDemo
