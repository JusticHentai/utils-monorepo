import { action } from 'storybook/actions'
import '../../.css/index.css'
import basicDemo from './basicDemo'
import overrideDemo from './overrideDemo'

const MergeQueryParamsDemo = () => {
  return (
    <div>
      <div
        className="storybook-button storybook-button-gap"
        onClick={() => {
          const res = basicDemo()
          action('合并查询参数')(res)
        }}
      >
        合并查询参数
      </div>
      <div
        className="storybook-button storybook-button-gap"
        onClick={() => {
          const res = overrideDemo()
          action('覆盖同名参数')(res)
        }}
      >
        覆盖同名参数
      </div>
    </div>
  )
}

export default MergeQueryParamsDemo
