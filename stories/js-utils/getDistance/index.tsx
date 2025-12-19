import { action } from 'storybook/actions'
import '../../.css/index.css'
import normalDemo from './normalDemo'

const getDistanceDemo = () => {
  return (
    <div>
      <div
        className="storybook-button"
        onClick={() => {
          const res = normalDemo()

          action('计算两点间距离')(res)
        }}
      >
        计算两点间距离
      </div>
    </div>
  )
}

export default getDistanceDemo
