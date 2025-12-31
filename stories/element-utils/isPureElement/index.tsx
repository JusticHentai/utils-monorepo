import { action } from 'storybook/actions'
import '../../.css/index.css'
import stringDemo from './stringDemo'
import numberDemo from './numberDemo'
import objectDemo from './objectDemo'

const IsPureElementDemo = () => {
  return (
    <div>
      <div
        className="storybook-button storybook-button-gap"
        onClick={() => {
          const res = stringDemo()
          action('字符串是纯元素')(res)
        }}
      >
        判断字符串
      </div>
      <div
        className="storybook-button storybook-button-gap"
        onClick={() => {
          const res = numberDemo()
          action('数字是纯元素')(res)
        }}
      >
        判断数字
      </div>
      <div
        className="storybook-button storybook-button-gap"
        onClick={() => {
          const res = objectDemo()
          action('对象不是纯元素')(res)
        }}
      >
        判断对象
      </div>
    </div>
  )
}

export default IsPureElementDemo
