import { action } from 'storybook/actions'
import '../../../.css/index.css'
import normalDemo from './normalDemo'

const numIslandsDemo = () => {
  return (
    <div>
      <div
        className="storybook-button storybook-button-gap"
        onClick={() => {
          const res = normalDemo()
          action('岛屿数量')(res)
        }}
      >
        岛屿数量测试
      </div>
    </div>
  )
}

export default numIslandsDemo
