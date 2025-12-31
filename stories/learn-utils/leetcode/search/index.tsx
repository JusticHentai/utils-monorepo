import { action } from 'storybook/actions'
import '../../../.css/index.css'
import normalDemo from './normalDemo'

const searchDemo = () => {
  return (
    <div>
      <div
        className="storybook-button storybook-button-gap"
        onClick={() => {
          const res = normalDemo()
          action('搜索旋转排序数组')(res)
        }}
      >
        搜索旋转排序数组
      </div>
    </div>
  )
}

export default searchDemo
