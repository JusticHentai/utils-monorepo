import { action } from 'storybook/actions'
import '../../.css/index.css'
import normalDemo from './normalDemo'

const getLocalTimeDemo = () => {
  return (
    <div>
      <div
        className="storybook-button"
        onClick={() => {
          const res = normalDemo()

          action('获取本地时间')(res)
        }}
      >
        获取本地时间
      </div>
    </div>
  )
}

export default getLocalTimeDemo
