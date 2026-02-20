import '../../.css/index.css'
import { runBasicDemo } from './basicDemo'
import { startMonitor, stopMonitor } from './monitorDemo'

const GetFpsDemo = () => {
  return (
    <div>
      <div className="button" onClick={runBasicDemo}>
        单次检测帧率
      </div>
      <div className="button" onClick={startMonitor}>
        开始持续监控
      </div>
      <div className="button" onClick={stopMonitor}>
        停止监控
      </div>
    </div>
  )
}

export default GetFpsDemo
