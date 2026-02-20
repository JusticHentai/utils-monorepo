import { action } from 'storybook/actions'
import '../../.css/index.css'

const execaDemo = () => {
  return (
    <div>
      <div
        className="button"
        onClick={() => {
          action('execa 是 Node.js 工具')({
            message: '此工具需要在 Node.js 环境中运行，请查看文档了解使用方法',
            features: [
              '模板字符串语法支持',
              'Promise 和同步 API',
              '丰富的配置选项',
              '详细的错误信息',
              'verbose 日志输出',
            ],
          })
        }}
      >
        查看 execa 用法
      </div>
      <div
        className="button"
        onClick={() => {
          action('$ 脚本语法')({
            example: 'await $`echo hello`',
            description: '默认继承 stdin，优先使用本地安装的二进制文件',
          })
        }}
      >
        查看 $ 语法
      </div>
      <div
        className="button"
        onClick={() => {
          action('execaSync 同步执行')({
            example: "execaSync('echo', ['hello'])",
            description: '同步执行命令，直接返回结果',
          })
        }}
      >
        查看同步执行
      </div>
      <div
        className="button"
        onClick={() => {
          action('execaCommand 命令字符串')({
            example: "await execaCommand('echo hello world')",
            description: '自动解析命令字符串为命令和参数',
          })
        }}
      >
        查看命令字符串
      </div>
      <div
        className="button"
        onClick={() => {
          action('execaNode Node.js 脚本')({
            example: "await execaNode('script.js', ['arg1'])",
            description: '专门用于执行 Node.js 脚本',
          })
        }}
      >
        查看 Node.js 脚本执行
      </div>
    </div>
  )
}

export default execaDemo
