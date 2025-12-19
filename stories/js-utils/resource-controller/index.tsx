import { action } from 'storybook/actions'
import '../../.css/index.css'
import addDemo from './addDemo'
import addImmediatelyDemo from './addImmediatelyDemo'

const ResourceControllerDemo = () => {
  return (
    <div>
      <div
        className="storybook-button storybook-button-gap"
        onClick={async () => {
          const res = await addDemo()

          action('添加资源并加载')(res)
        }}
      >
        添加资源并加载
      </div>
      <div
        className="storybook-button"
        onClick={async () => {
          const res = await addImmediatelyDemo()

          action('立即添加并加载资源')(res)
        }}
      >
        立即添加并加载资源
      </div>
    </div>
  )
}

export default ResourceControllerDemo
