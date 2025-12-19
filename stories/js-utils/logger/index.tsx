import { action } from 'storybook/actions'
import '../../.css/index.css'
import infoDemo from './infoDemo'
import debugDemo from './debugDemo'
import warnDemo from './warnDemo'
import errorDemo from './errorDemo'

const loggerDemo = () => {
  return (
    <div>
      <div
        className="storybook-button storybook-button-gap"
        onClick={() => {
          infoDemo()
          action('info 日志')({ type: 'info' })
        }}
      >
        info 日志
      </div>
      <div
        className="storybook-button storybook-button-gap"
        onClick={() => {
          debugDemo()
          action('debug 日志')({ type: 'debug' })
        }}
      >
        debug 日志
      </div>
      <div
        className="storybook-button storybook-button-gap"
        onClick={() => {
          warnDemo()
          action('warn 日志')({ type: 'warn' })
        }}
      >
        warn 日志
      </div>
      <div
        className="storybook-button"
        onClick={() => {
          errorDemo()
          action('error 日志')({ type: 'error' })
        }}
      >
        error 日志
      </div>
    </div>
  )
}

export default loggerDemo
