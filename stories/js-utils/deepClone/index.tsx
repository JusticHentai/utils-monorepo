import { action } from 'storybook/actions'
import '../../.css/index.css'
import normalDemo from './normalDemo'
import circularDemo from './circularDemo'
import dateDemo from './dateDemo'

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
        深拷贝普通对象
      </div>
      <div
        className="storybook-button storybook-button-gap"
        onClick={() => {
          const res = circularDemo()

          action('深拷贝循环引用对象')(res)
        }}
      >
        深拷贝循环引用对象
      </div>
      <div
        className="storybook-button"
        onClick={() => {
          const res = dateDemo()

          action('深拷贝 Date 对象')(res)
        }}
      >
        深拷贝 Date 对象
      </div>
    </div>
  )
}

export default deepCloneDemo
