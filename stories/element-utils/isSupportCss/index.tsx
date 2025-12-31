import { action } from 'storybook/actions'
import '../../.css/index.css'
import basicDemo from './basicDemo'
import gridDemo from './gridDemo'

const IsSupportCssDemo = () => {
  return (
    <div>
      <div
        className="storybook-button storybook-button-gap"
        onClick={() => {
          const res = basicDemo()
          action('检测 flex 支持')(res)
        }}
      >
        检测 flex 支持
      </div>
      <div
        className="storybook-button storybook-button-gap"
        onClick={() => {
          const res = gridDemo()
          action('检测 grid 支持')(res)
        }}
      >
        检测 grid 支持
      </div>
    </div>
  )
}

export default IsSupportCssDemo
