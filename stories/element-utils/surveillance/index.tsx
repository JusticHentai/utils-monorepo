import '../../.css/index.css'
import basicDemo from './basicDemo'
import webVitalsDemo from './webVitalsDemo'
import errorDemo from './errorDemo'
import requestDemo from './requestDemo'
import resourceDemo from './resourceDemo'
import paintMetricsDemo from './paintMetricsDemo'
import behaviorDemo from './behaviorDemo'
import fpsDemo from './fpsDemo'
import jankDemo from './jankDemo'
import longTaskDemo from './longTaskDemo'
import lifecycleDemo from './lifecycleDemo'
import updateConfigDemo from './updateConfigDemo'
import shouldSampleDemo from './shouldSampleDemo'

const SurveillanceDemo = () => {
  return (
    <div>
      <div className="button" onClick={basicDemo}>
        基础用法
      </div>
      <div className="button" onClick={webVitalsDemo}>
        Web Vitals 监控
      </div>
      <div className="button" onClick={paintMetricsDemo}>
        绘制指标 (FP/FCP)
      </div>
      <div className="button" onClick={errorDemo}>
        错误监控
      </div>
      <div className="button" onClick={requestDemo}>
        请求监控
      </div>
      <div className="button" onClick={resourceDemo}>
        资源监控
      </div>
      <div className="button" onClick={behaviorDemo}>
        行为监控
      </div>
      <div className="button" onClick={fpsDemo}>
        FPS 监控
      </div>
      <div className="button" onClick={jankDemo}>
        卡顿监控
      </div>
      <div className="button" onClick={longTaskDemo}>
        长任务监控
      </div>
      <div className="button" onClick={lifecycleDemo}>
        生命周期监控
      </div>
      <div className="button" onClick={updateConfigDemo}>
        动态更新配置
      </div>
      <div className="button" onClick={shouldSampleDemo}>
        采样率判断
      </div>
    </div>
  )
}

export default SurveillanceDemo
