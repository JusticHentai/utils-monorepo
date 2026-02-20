import '../../.css/index.css'
import { useEffect, useRef, useState } from 'react'
import { createEffectWithTarget } from '../../../packages/element-utils/src/createEffectWithTarget'
import { action } from 'storybook/actions'

const useEffectWithTarget = createEffectWithTarget(useEffect)

const CreateEffectWithTargetDemo = () => {
  const targetRef = useRef<HTMLDivElement>(null)
  const [count, setCount] = useState(0)
  const [inited, setInited] = useState(false)

  useEffectWithTarget(
    () => {
      if (!inited) return
      action('effect 执行')({
        count,
        target: targetRef.current?.textContent,
      })
      return () => {
        action('effect 清理')('清理上一次 effect')
      }
    },
    [count],
    targetRef
  )

  return (
    <div>
      <div className="button" onClick={() => setInited(true)}>
        初始化示例
      </div>
      <div className="button" onClick={() => setCount((c) => c + 1)}>
        更新依赖 (count: {count})
      </div>

      {inited && (
        <div style={{ marginTop: 40 }}>
          <div
            ref={targetRef}
            style={{
              width: 200,
              height: 100,
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              borderRadius: 8,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontWeight: 'bold',
            }}
          >
            目标元素 {count}
          </div>
        </div>
      )}
    </div>
  )
}

export default CreateEffectWithTargetDemo
