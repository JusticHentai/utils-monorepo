import { action } from 'storybook/actions'
import '../../.css/index.css'

const loggerDemo = () => {
  return (
    <div>
      <div
        className="button"
        onClick={() => {
          action('info 日志')({
            message: 'logger.info 输出带 [INFO] 标签的日志，颜色为 #7ed6df',
          })
        }}
      >
        info 日志
      </div>
      <div
        className="button"
        onClick={() => {
          action('debug 日志')({
            message: 'logger.debug 输出带 [DEBUG] 标签的日志，颜色为 #e056fd',
          })
        }}
      >
        debug 日志
      </div>
      <div
        className="button"
        onClick={() => {
          action('warn 日志')({
            message: 'logger.warn 输出带 [WARN] 标签的日志，颜色为 #f0932b',
          })
        }}
      >
        warn 日志
      </div>
      <div
        className="button"
        onClick={() => {
          action('error 日志')({
            message: 'logger.error 输出带 [ERROR] 标签的日志，颜色为 #eb4d4b',
          })
        }}
      >
        error 日志
      </div>
    </div>
  )
}

export default loggerDemo
