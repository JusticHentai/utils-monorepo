import '../../.css/index.css'
import { useRef } from 'react'
import useHover from '../../../packages/element-utils/src/useHover'
import { action } from 'storybook/actions'

const UseHoverDemo = () => {
  const basicRef = useRef<HTMLDivElement>(null)
  const callbackRef = useRef<HTMLDivElement>(null)

  const isBasicHovering = useHover(basicRef)
  const isCallbackHovering = useHover(callbackRef, {
    onEnter: () => action('onEnter')('鼠标进入'),
    onLeave: () => action('onLeave')('鼠标离开'),
    onChange: (isHovering) => action('onChange')(isHovering),
  })

  return (
    <div>
      <div style={{ marginBottom: 16, fontWeight: 'bold' }}>基础用法</div>
      <div style={{ marginBottom: 8, color: '#666' }}>
        将鼠标移入下方元素：
      </div>
      <div
        ref={basicRef}
        style={{
          width: 200,
          height: 100,
          background: isBasicHovering
            ? 'linear-gradient(135deg, #52c41a 0%, #73d13d 100%)'
            : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          borderRadius: 8,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontWeight: 'bold',
          transition: 'all 0.3s',
          cursor: 'pointer',
        }}
      >
        {isBasicHovering ? 'Hovering!' : 'Hover me'}
      </div>

      <div style={{ margin: '24px 0 16px', fontWeight: 'bold' }}>带回调函数</div>
      <div style={{ marginBottom: 8, color: '#666' }}>
        监听进入/离开事件（查看 Actions 面板）：
      </div>
      <div
        ref={callbackRef}
        style={{
          width: 200,
          height: 100,
          background: isCallbackHovering
            ? 'linear-gradient(135deg, #ff4d4f 0%, #ff7875 100%)'
            : 'linear-gradient(135deg, #faad14 0%, #ffc53d 100%)',
          borderRadius: 8,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontWeight: 'bold',
          transition: 'all 0.3s',
          cursor: 'pointer',
        }}
      >
        {isCallbackHovering ? 'Hovering!' : 'Hover me'}
      </div>
    </div>
  )
}

export default UseHoverDemo
