import { action } from 'storybook/actions'
import '../../../.css/index.css'
import normalDemo from './normalDemo'

const bfsDemo = () => {
  return (
    <div>
      <div
        className="storybook-button storybook-button-gap"
        onClick={() => {
          const res = normalDemo()
          action('BFS 广度优先搜索')(res)
        }}
      >
        BFS 广度优先搜索测试
      </div>
    </div>
  )
}

export default bfsDemo
