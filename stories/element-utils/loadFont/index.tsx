import { action } from 'storybook/actions'
import '../../.css/index.css'
import basicDemo from './basicDemo'

const LoadFontDemo = () => {
  return (
    <div>
      <div
        className="storybook-button storybook-button-gap"
        onClick={async () => {
          const res = await basicDemo()
          action('加载字体')(res)
        }}
      >
        加载 Roboto 字体
      </div>
    </div>
  )
}

export default LoadFontDemo
