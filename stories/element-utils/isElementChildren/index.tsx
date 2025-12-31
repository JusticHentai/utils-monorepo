import { action } from 'storybook/actions'
import '../../.css/index.css'
import basicDemo from './basicDemo'
import notChildDemo from './notChildDemo'

const IsElementChildrenDemo = () => {
  return (
    <div>
      <div
        className="storybook-button storybook-button-gap"
        onClick={() => {
          const res = basicDemo()
          action('是子元素')(res)
        }}
      >
        判断是子元素
      </div>
      <div
        className="storybook-button storybook-button-gap"
        onClick={() => {
          const res = notChildDemo()
          action('不是子元素')(res)
        }}
      >
        判断不是子元素
      </div>
    </div>
  )
}

export default IsElementChildrenDemo
