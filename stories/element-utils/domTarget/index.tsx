import '../../.css/index.css'
import { useRef, useState } from 'react'
import getTargetElement from '../../../packages/element-utils/src/domTarget'
import { action } from 'storybook/actions'

const DomTargetDemo = () => {
  const divRef = useRef<HTMLDivElement>(null)
  const [inited, setInited] = useState(false)

  const handleRefDemo = () => {
    const element = getTargetElement(divRef)
    action('从 ref 获取元素')({
      tagName: element?.tagName,
      className: element?.className,
    })
  }

  const handleFunctionDemo = () => {
    const element = getTargetElement(() => document.getElementById('demo-target'))
    action('从函数获取元素')({
      tagName: element?.tagName,
      id: element?.id,
    })
  }

  const handleDirectDemo = () => {
    const element = getTargetElement(document.body)
    action('直接传入元素')({
      tagName: element?.tagName,
    })
  }

  const handleDefaultDemo = () => {
    const element = getTargetElement(null, document.documentElement)
    action('使用默认元素')({
      tagName: element?.tagName,
    })
  }

  return (
    <div>
      <div className="button" onClick={() => setInited(true)}>
        初始化示例
      </div>
      <div className="button" onClick={handleRefDemo}>
        从 ref 获取
      </div>
      <div className="button" onClick={handleFunctionDemo}>
        从函数获取
      </div>
      <div className="button" onClick={handleDirectDemo}>
        直接传入元素
      </div>
      <div className="button" onClick={handleDefaultDemo}>
        使用默认值
      </div>

      {inited && (
        <div style={{ marginTop: 40 }}>
          <div
            id="demo-target"
            ref={divRef}
            className="target-element"
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
            目标元素
          </div>
        </div>
      )}
    </div>
  )
}

export default DomTargetDemo
