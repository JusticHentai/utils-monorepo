import { action } from 'storybook/actions'
import '../../.css/index.css'
import nanDemo from './nanDemo'
import notNumberDemo from './notNumberDemo'
import numberDemo from './numberDemo'

const isNumberDemo = () => {
  return (
    <div>
      <div
        className="storybook-button storybook-button-gap"
        onClick={() => {
          const res = numberDemo()

          action('检测数字 123')(res)
        }}
      >
        检测数字 123
      </div>
      <div
        className="storybook-button storybook-button-gap"
        onClick={() => {
          const res = nanDemo()

          action('检测 NaN')(res)
        }}
      >
        检测 NaN
      </div>
      <div
        className="storybook-button"
        onClick={() => {
          const res = notNumberDemo()

          action('检测字符串 "123"')(res)
        }}
      >
        检测字符串 "123"
      </div>
    </div>
  )
}

export default isNumberDemo
