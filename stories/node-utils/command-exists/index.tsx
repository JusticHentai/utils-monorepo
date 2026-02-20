import { action } from 'storybook/actions'
import '../../.css/index.css'

const commandExistsDemo = () => {
  return (
    <div>
      <div
        className="button"
        onClick={() => {
          action('command-exists 是 Node.js 工具')({
            message: '此工具需要在 Node.js 环境中运行，请查看文档了解使用方法',
          })
        }}
      >
        查看 command-exists 用法
      </div>
    </div>
  )
}

export default commandExistsDemo
