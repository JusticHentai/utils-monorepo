import { action } from 'storybook/actions'
import '../../.css/index.css'
import { getDemo, setDemo } from './demo'

const PointMapDemo = () => {
  return (
    <div>
      <div
        className="storybook-button storybook-button-gap"
        onClick={() => {
          const res = setDemo()

          action('设置坐标值 1 2 值为 value')(res)
        }}
      >
        设置坐标值
      </div>
      <div
        className="storybook-button"
        onClick={() => {
          const res = getDemo()

          action('获取坐标值 1 2 的值')(res)
        }}
      >
        获取坐标值
      </div>
    </div>
  )
}

export default PointMapDemo
