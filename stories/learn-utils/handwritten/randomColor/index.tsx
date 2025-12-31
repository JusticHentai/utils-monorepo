import { action } from 'storybook/actions'
import '../../../.css/index.css'
import normalDemo from './normalDemo'

const randomColorDemo = () => {
  return (
    <div>
      <div
        className="storybook-button storybook-button-gap"
        onClick={() => {
          const res = normalDemo()
          action('随机颜色生成')(res)
        }}
      >
        生成随机颜色
      </div>
    </div>
  )
}

export default randomColorDemo
