import { action } from 'storybook/actions'
import '../../../.css/index.css'
import normalDemo from './normalDemo'

const sortColorsDemo = () => {
  return (
    <div>
      <div
        className="storybook-button storybook-button-gap"
        onClick={() => {
          const res = normalDemo()
          action('颜色分类')(res)
        }}
      >
        颜色分类（荷兰国旗）
      </div>
    </div>
  )
}

export default sortColorsDemo
