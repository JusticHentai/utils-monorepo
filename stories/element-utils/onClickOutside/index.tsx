import '../../.css/index.css'
import { useEffect, useRef, useState } from 'react'
import onClickOutside from '../../../packages/element-utils/src/onClickOutside'
import { action } from 'storybook/actions'

const OnClickOutsideDemo = () => {
  const boxRef = useRef<HTMLDivElement>(null)
  const [isListening, setIsListening] = useState(false)
  const [clickCount, setClickCount] = useState(0)

  useEffect(() => {
    if (!isListening || !boxRef.current) return

    const stop = onClickOutside(boxRef.current, (event) => {
      setClickCount((c) => c + 1)
      action('点击外部')({
        target: (event.target as Element)?.tagName,
        x: event.clientX,
        y: event.clientY,
      })
    })

    action('开始监听')('点击紫色方块外部区域')

    return () => {
      stop()
    }
  }, [isListening])

  return (
    <div>
      <div className="button" onClick={() => setIsListening(true)}>
        开始监听
      </div>
      <div className="button" onClick={() => setIsListening(false)}>
        停止监听
      </div>

      {isListening && (
        <div style={{ marginTop: 40 }}>
          <div
            ref={boxRef}
            style={{
              width: 200,
              height: 150,
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              borderRadius: 8,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontWeight: 'bold',
              cursor: 'pointer',
            }}
            onClick={() => action('点击内部')('不会触发外部点击回调')}
          >
            点击我（内部）
          </div>
          <p style={{ marginTop: 10, fontSize: 12, color: '#666' }}>
            外部点击次数: {clickCount}
          </p>
        </div>
      )}
    </div>
  )
}

export default OnClickOutsideDemo
