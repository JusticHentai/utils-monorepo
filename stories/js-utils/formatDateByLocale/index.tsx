import '../../.css/index.css'
import zhCNDemo from './zhCNDemo'
import enUSDemo from './enUSDemo'

const formatDateByLocaleDemo = () => {
  return (
    <div>
      <div className="button" onClick={zhCNDemo}>
        中文格式 + 上海时区
      </div>
      <div className="button" onClick={enUSDemo}>
        英文格式 + 纽约时区
      </div>
    </div>
  )
}

export default formatDateByLocaleDemo
