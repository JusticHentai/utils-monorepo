import { action } from 'storybook/actions'
import '../../.css/index.css'

const gitDemo = () => {
  return (
    <div>
      <div
        className="button"
        onClick={() => {
          action('gitTag')({
            message: 'gitTag(tag) - 创建并推送 git tag',
          })
        }}
      >
        gitTag
      </div>
      <div
        className="button"
        onClick={() => {
          action('gitUpdate')({
            message: 'gitUpdate(message?) - git add、commit、push 三连',
          })
        }}
      >
        gitUpdate
      </div>
    </div>
  )
}

export default gitDemo
