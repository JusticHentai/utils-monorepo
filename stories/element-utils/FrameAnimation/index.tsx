import { useRef } from 'react'
import type { FrameAnimationInstance } from '../../../packages/element-utils/src/FrameAnimation'
import '../../.css/index.css'
import createDemo from './createDemo'
import startDemo from './startDemo'
import startOnceDemo from './startOnceDemo'
import pauseDemo from './pauseDemo'
import resumeDemo from './resumeDemo'

const FrameAnimationDemo = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const instanceRef = useRef<FrameAnimationInstance | null>(null)

  const handleCreate = async () => {
    if (!containerRef.current) return

    const res = await createDemo()

    // 清空容器
    containerRef.current.innerHTML = ''

    // 创建动画实例
    instanceRef.current = res.animation.createInstance(containerRef.current)
  }

  const handleStart = () => {
    startDemo(instanceRef.current)
  }

  const handleStartOnce = () => {
    startOnceDemo(instanceRef.current)
  }

  const handlePause = () => {
    pauseDemo(instanceRef.current)
  }

  const handleResume = () => {
    resumeDemo(instanceRef.current)
  }

  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <div
        style={{
          height: '100%',
          aspectRatio: '134 / 180',
          background: '#1a1f3c',
          flexShrink: 0,
        }}
      >
        <div
          ref={containerRef}
          style={{
            width: '100%',
            height: '100%',
          }}
        />
      </div>
      <div style={{ display: 'flex', gap: 8, padding: 16, flexWrap: 'wrap', alignItems: 'center', alignContent: 'center' }}>
        <div className="button" onClick={handleCreate}>
          创建实例
        </div>
        <div className="button" onClick={handleStart}>
          循环播放
        </div>
        <div className="button" onClick={handleStartOnce}>
          播放一次
        </div>
        <div className="button" onClick={handlePause}>
          暂停
        </div>
        <div className="button" onClick={handleResume}>
          继续
        </div>
      </div>
    </div>
  )
}

export default FrameAnimationDemo
