import { action } from 'storybook/actions'
import '../../.css/index.css'
import basicDemo from './basicDemo'
import errorDemo from './errorDemo'

const LoadImageDemo = () => {
  return (
    <div>
      <div
        className="storybook-button storybook-button-gap"
        onClick={async () => {
          const res = await basicDemo()
          action('加载图片成功')(res)
        }}
      >
        加载图片（成功）
      </div>
      <div
        className="storybook-button storybook-button-gap"
        onClick={async () => {
          const res = await errorDemo()
          action('加载图片失败')(res)
        }}
      >
        加载图片（失败）
      </div>
    </div>
  )
}

export default LoadImageDemo
