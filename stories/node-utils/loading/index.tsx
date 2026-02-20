import { action } from 'storybook/actions'
import '../../.css/index.css'

const loadingDemo = () => {
  return (
    <div>
      <div
        className="button"
        onClick={() => {
          action('start')({
            message: 'loading.start(text?) - 开始显示 loading 动画',
          })
        }}
      >
        start
      </div>
      <div
        className="button"
        onClick={() => {
          action('succeed')({
            message: 'loading.succeed(text?) - 显示成功状态',
          })
        }}
      >
        succeed
      </div>
      <div
        className="button"
        onClick={() => {
          action('fail')({
            message: 'loading.fail(text?) - 显示失败状态',
          })
        }}
      >
        fail
      </div>
      <div
        className="button"
        onClick={() => {
          action('stop')({
            message: 'loading.stop() - 停止 loading 动画',
          })
        }}
      >
        stop
      </div>
    </div>
  )
}

export default loadingDemo
