import '../../.css/index.css'
import lcpDemo from './lcpDemo'
import clsDemo from './clsDemo'
import allMetricsDemo from './allMetricsDemo'

const GetMetricRatingDemo = () => {
  return (
    <div>
      <div className="button" onClick={lcpDemo}>
        LCP 评级
      </div>
      <div className="button" onClick={clsDemo}>
        CLS 评级
      </div>
      <div className="button" onClick={allMetricsDemo}>
        所有指标评级
      </div>
    </div>
  )
}

export default GetMetricRatingDemo
