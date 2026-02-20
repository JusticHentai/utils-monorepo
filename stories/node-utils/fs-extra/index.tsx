import '../../.css/index.css'
import copyDemo from './copyDemo'
import ensureDirDemo from './ensureDirDemo'
import ensureFileDemo from './ensureFileDemo'
import moveDemo from './moveDemo'
import pathExistsDemo from './pathExistsDemo'
import readWriteJsonDemo from './readWriteJsonDemo'
import outputFileDemo from './outputFileDemo'
import removeDemo from './removeDemo'
import emptyDirDemo from './emptyDirDemo'

const FsExtraDemo = () => {
  return (
    <div>
      <div className="button" onClick={copyDemo}>
        复制文件/目录
      </div>
      <div className="button" onClick={ensureDirDemo}>
        确保目录存在
      </div>
      <div className="button" onClick={ensureFileDemo}>
        确保文件存在
      </div>
      <div className="button" onClick={moveDemo}>
        移动文件/目录
      </div>
      <div className="button" onClick={pathExistsDemo}>
        检查路径是否存在
      </div>
      <div className="button" onClick={readWriteJsonDemo}>
        读写 JSON 文件
      </div>
      <div className="button" onClick={outputFileDemo}>
        输出文件
      </div>
      <div className="button" onClick={removeDemo}>
        删除文件/目录
      </div>
      <div className="button" onClick={emptyDirDemo}>
        清空目录
      </div>
    </div>
  )
}

export default FsExtraDemo
