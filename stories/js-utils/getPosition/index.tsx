import { action } from 'storybook/actions'
import '../../.css/index.css'
import normalDemo from './normalDemo'

const getPositionDemo = () => {
  return (
    <div>
      <div
        className="storybook-button"
        onClick={() => {
          const res = normalDemo()

          action('行列转 2d 坐标系')(res)
        }}
      >
        行列转 2d 坐标系
      </div>
    </div>
  )
}

export default getPositionDemo
