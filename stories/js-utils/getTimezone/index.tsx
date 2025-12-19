import { action } from 'storybook/actions'
import '../../.css/index.css'
import zhDemo from './zhDemo'
import enDemo from './enDemo'

const getTimezoneDemo = () => {
  return (
    <div>
      <div
        className="storybook-button storybook-button-gap"
        onClick={() => {
          const res = zhDemo()

          action('格式化时间戳为中文时区')(res)
        }}
      >
        格式化时间戳为中文时区
      </div>
      <div
        className="storybook-button"
        onClick={() => {
          const res = enDemo()

          action('格式化时间戳为英文时区')(res)
        }}
      >
        格式化时间戳为英文时区
      </div>
    </div>
  )
}

export default getTimezoneDemo
