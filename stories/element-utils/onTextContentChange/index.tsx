import { useEffect, useRef, useState } from 'react'
import { action } from 'storybook/actions'
import onTextContentChange from '../../../packages/element-utils/src/onTextContentChange'
import '../../.css/index.css'

const INITIAL_TEXT = '初始文本内容'

const OnTextContentChangeDemo = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const textNodeRef = useRef<Text | null>(null)
  const [inited, setInited] = useState(false)

  useEffect(() => {
    if (!inited || !containerRef.current) return

    const container = containerRef.current

    // 创建文本节点（由 DOM API 完全控制，不受 React 干扰）
    const textNode = document.createTextNode(INITIAL_TEXT)
    container.appendChild(textNode)
    textNodeRef.current = textNode

    const stop = onTextContentChange(container, (oldValue, newValue) => {
      action('文本内容变化')({
        旧值: oldValue,
        新值: newValue,
      })
    })

    action('初始化成功')('点击按钮修改文本内容')

    return () => {
      stop()
      container.textContent = ''
      textNodeRef.current = null
    }
  }, [inited])

  const handleInit = () => {
    setInited(true)
  }

  const handleChangeText = () => {
    if (!textNodeRef.current) {
      action('请先初始化')()
      return
    }
    const newText = `更新时间: ${new Date().toLocaleTimeString()}`
    textNodeRef.current.textContent = newText
  }

  const handleCleanup = () => {
    setInited(false)
    action('清理完成')()
  }

  return (
    <div>
      <div className="button" onClick={handleInit}>
        初始化示例
      </div>
      <div className="button" onClick={handleChangeText}>
        修改文本内容
      </div>
      <div className="button" onClick={handleCleanup}>
        清理示例
      </div>

      {/* 演示区域 - 文本内容完全由 DOM API 控制，不使用 React state */}
      {inited && (
        <div style={{ marginTop: 40 }}>
          <div
            ref={containerRef}
            style={{
              width: 250,
              padding: 20,
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              borderRadius: 8,
              color: 'white',
              fontWeight: 'bold',
              textAlign: 'center',
            }}
          />
        </div>
      )}
    </div>
  )
}

export default OnTextContentChangeDemo
