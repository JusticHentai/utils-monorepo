import { action } from 'storybook/actions'
import '../../.css/index.css'
import basicDemo from './basicDemo'
import falsyDemo from './falsyDemo'

const MergeClassDemo = () => {
  return (
    <div>
      <div
        className="storybook-button storybook-button-gap"
        onClick={() => {
          const res = basicDemo()
          action('合并多种类型 class')(res)
        }}
      >
        合并多种类型 class
      </div>
      <div
        className="storybook-button storybook-button-gap"
        onClick={() => {
          const res = falsyDemo()
          action('过滤 falsy 值')(res)
        }}
      >
        过滤 falsy 值
      </div>
    </div>
  )
}

export default MergeClassDemo
