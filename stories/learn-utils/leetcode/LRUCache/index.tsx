import { action } from 'storybook/actions'
import '../../../.css/index.css'
import normalDemo from './normalDemo'

const LRUCacheDemo = () => {
  return (
    <div>
      <div
        className="storybook-button storybook-button-gap"
        onClick={() => {
          const res = normalDemo()
          action('LRU 缓存测试')(res)
        }}
      >
        LRU 缓存测试
      </div>
    </div>
  )
}

export default LRUCacheDemo
