import '../../.css/index.css'
import intersectionDemo from './intersectionDemo'
import mutationDemo from './mutationDemo'
import performanceDemo from './performanceDemo'
import resizeDemo from './resizeDemo'

const ObserverDemo = () => {
  const { initIntersection, stopIntersection } = intersectionDemo()

  const { initMutation, stopMutation, triggerMutation } = mutationDemo()

  const { initResize, stopResize } = resizeDemo()

  const { initPerformance, initCustomPerformance, stopPerformance } =
    performanceDemo()

  return (
    <div style={{ maxWidth: '700px' }}>
      <h3>IntersectionObserver - 元素可见性</h3>
      <div className="button" onClick={initIntersection}>
        createIntersectionObserver
      </div>
      <div className="button" onClick={stopIntersection}>
        停止监听
      </div>

      <h3>MutationObserver - DOM 变化</h3>
      <div className="button" onClick={initMutation}>
        createMutationObserver
      </div>
      <div className="button" onClick={triggerMutation}>
        触发 DOM 变化
      </div>
      <div className="button" onClick={stopMutation}>
        停止监听
      </div>

      <h3>ResizeObserver - 尺寸变化</h3>
      <div className="button" onClick={initResize}>
        createResizeObserver
      </div>
      <div className="button" onClick={stopResize}>
        停止监听
      </div>

      <h3>PerformanceObserver - 性能监控</h3>
      <div className="button" onClick={initPerformance}>
        监听 Web Vitals
      </div>
      <div className="button" onClick={initCustomPerformance}>
        监听 Mark/Measure
      </div>
      <div className="button" onClick={stopPerformance}>
        停止监听
      </div>

      {/* 用于演示的目标元素 */}
      <div
        id="observer-target"
        style={{
          marginTop: '20px',
          padding: '20px',
          border: '2px dashed #ccc',
          minHeight: '100px',
          resize: 'both',
          overflow: 'auto',
          background: '#fafafa',
        }}
      >
        <p style={{ margin: '0 0 10px 0', fontWeight: 'bold' }}>
          目标元素（可调整大小）
        </p>
        <div
          id="mutation-target"
          style={{
            padding: '10px',
            background: '#fff',
            border: '1px solid #eee',
          }}
        >
          可变内容区域
        </div>
      </div>
    </div>
  )
}

export default ObserverDemo
