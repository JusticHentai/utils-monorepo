import { action } from 'storybook/actions'
import '../../../.css/index.css'
import normalDemo from './normalDemo'
import circularDemo from './circularDemo'

const deepCloneDemo = () => {
  return (
    <div>
      <div
        className="storybook-button storybook-button-gap"
        onClick={() => {
          const res = normalDemo()
          action('深拷贝普通对象')(res)
        }}
      >
        普通对象深拷贝
      </div>
      <div
        className="storybook-button storybook-button-gap"
        onClick={() => {
          const res = circularDemo()
          action('处理循环引用')(res)
        }}
      >
        循环引用处理
      </div>
    </div>
  )
}

export default deepCloneDemo
