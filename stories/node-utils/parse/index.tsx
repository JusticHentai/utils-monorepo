import { action } from 'storybook/actions'
import '../../.css/index.css'

const parseDemo = () => {
  return (
    <div>
      <div
        className="button"
        onClick={() => {
          action('parseCommand')({
            message: 'parseCommand(command) - 解析命令字符串中的必选和可选参数',
          })
        }}
      >
        parseCommand
      </div>
      <div
        className="button"
        onClick={() => {
          action('parseFileName')({
            message: 'parseFileName(filePath) - 解析文件路径获取文件名和扩展名',
          })
        }}
      >
        parseFileName
      </div>
    </div>
  )
}

export default parseDemo
