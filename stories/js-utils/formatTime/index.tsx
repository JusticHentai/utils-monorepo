import { action } from 'storybook/actions'
import '../../.css/index.css'
import normalDemo from './normalDemo'
import hourDemo from './hourDemo'

const formatTimeDemo = () => {
  return (
    <div>
      <div
        className="storybook-button storybook-button-gap"
        onClick={() => {
          const res = normalDemo()

          action('格式化 126 秒')(res)
        }}
      >
        格式化 126 秒
      </div>
      <div
        className="storybook-button"
        onClick={() => {
          const res = hourDemo()

          action('格式化 3661 秒（超过1小时）')(res)
        }}
      >
        格式化 3661 秒（超过1小时）
      </div>
    </div>
  )
}

export default formatTimeDemo
