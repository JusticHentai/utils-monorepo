import { action } from 'storybook/actions'
import '../../.css/index.css'
import basicDemo from './basicDemo'
import arrayDemo from './arrayDemo'

const MergeStyleDemo = () => {
  return (
    <div>
      <div
        className="storybook-button storybook-button-gap"
        onClick={() => {
          const res = basicDemo()
          action('合并样式对象')(res)
        }}
      >
        合并样式对象
      </div>
      <div
        className="storybook-button storybook-button-gap"
        onClick={() => {
          const res = arrayDemo()
          action('合并数组样式')(res)
        }}
      >
        合并数组样式
      </div>
    </div>
  )
}

export default MergeStyleDemo
