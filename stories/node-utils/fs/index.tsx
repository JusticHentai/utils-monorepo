import { action } from 'storybook/actions'
import '../../.css/index.css'

const fsDemo = () => {
  return (
    <div>
      <div
        className="button"
        onClick={() => {
          action('cd')({
            message: 'cd(dirname) - 切换当前工作目录',
          })
        }}
      >
        cd
      </div>
      <div
        className="button"
        onClick={() => {
          action('copy')({
            message: 'copy(sourcePath, targetPath) - 复制文件或目录',
          })
        }}
      >
        copy
      </div>
      <div
        className="button"
        onClick={() => {
          action('exists')({
            message: 'exists(dirname) - 检测目录是否存在',
          })
        }}
      >
        exists
      </div>
      <div
        className="button"
        onClick={() => {
          action('md')({
            message: 'md(dirname) - 创建目录',
          })
        }}
      >
        md
      </div>
      <div
        className="button"
        onClick={() => {
          action('rm')({
            message: 'rm(dirname) - 删除目录',
          })
        }}
      >
        rm
      </div>
      <div
        className="button"
        onClick={() => {
          action('read')({
            message: 'read(dirname) - 读取文件内容',
          })
        }}
      >
        read
      </div>
      <div
        className="button"
        onClick={() => {
          action('write')({
            message: 'write(dirname, data) - 写入文件内容',
          })
        }}
      >
        write
      </div>
    </div>
  )
}

export default fsDemo
