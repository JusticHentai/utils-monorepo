import { action } from 'storybook/actions'
import '../../.css/index.css'
import normalDemo from './normalDemo'

const randomDemo = () => {
  return (
    <div>
      <div
        className="storybook-button"
        onClick={() => {
          const res = normalDemo()

          action('生成 1 到 10 之间的随机数')(res)
        }}
      >
        生成 1 到 10 之间的随机数
      </div>
    </div>
  )
}

export default randomDemo
