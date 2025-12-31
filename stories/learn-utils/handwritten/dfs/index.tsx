import { action } from 'storybook/actions'
import '../../../.css/index.css'
import normalDemo from './normalDemo'

const dfsDemo = () => {
  return (
    <div>
      <div
        className="storybook-button storybook-button-gap"
        onClick={() => {
          const res = normalDemo()
          action('DFS 深度优先搜索')(res)
        }}
      >
        DFS 深度优先搜索测试
      </div>
    </div>
  )
}

export default dfsDemo
