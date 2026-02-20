import '../../.css/index.css'
import { useEffect, useRef, useState } from 'react'
import onChildListChange from '../../../packages/element-utils/src/onChildListChange'
import { action } from 'storybook/actions'

const OnChildListChangeDemo = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [inited, setInited] = useState(false)
  const [children, setChildren] = useState<number[]>([])
  const childCountRef = useRef(0)

  useEffect(() => {
    if (!inited || !containerRef.current) return

    const stop = onChildListChange(
      containerRef.current,
      (addedNodes, removedNodes) => {
        action('子节点变化')({
          添加的节点数: addedNodes.length,
          移除的节点数: removedNodes.length,
          添加的节点: addedNodes.map((n) => (n as HTMLElement).textContent),
          移除的节点: removedNodes.map((n) => (n as HTMLElement).textContent),
        })
      }
    )

    action('初始化成功')('点击按钮添加或移除子节点')

    return () => {
      stop()
    }
  }, [inited])

  const handleInit = () => {
    setInited(true)
    setChildren([])
    childCountRef.current = 0
  }

  const handleAddChild = () => {
    if (!inited) {
      action('请先初始化')()
      return
    }
    childCountRef.current++
    setChildren((prev) => [...prev, childCountRef.current])
  }

  const handleRemoveChild = () => {
    if (!inited) {
      action('请先初始化')()
      return
    }
    if (children.length === 0) {
      action('没有可移除的子节点')()
      return
    }
    setChildren((prev) => prev.slice(0, -1))
  }

  const handleCleanup = () => {
    setInited(false)
    setChildren([])
    childCountRef.current = 0
    action('清理完成')()
  }

  return (
    <div>
      <div className="button" onClick={handleInit}>
        初始化示例
      </div>
      <div className="button" onClick={handleAddChild}>
        添加子节点
      </div>
      <div className="button" onClick={handleRemoveChild}>
        移除子节点
      </div>
      <div className="button" onClick={handleCleanup}>
        清理示例
      </div>

      {/* 演示区域 */}
      {inited && (
        <div style={{ marginTop: 40 }}>
          <div
            ref={containerRef}
            style={{
              width: 300,
              minHeight: 150,
              background: '#f5f5f5',
              borderRadius: 8,
              padding: 15,
            }}
          >
            <div
              style={{
                fontWeight: 'bold',
                marginBottom: 10,
                color: '#333',
              }}
            >
              子节点容器
            </div>
            {children.map((num) => (
              <div
                key={num}
                className="child-item"
                style={{
                  padding: 10,
                  margin: '5px 0',
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  borderRadius: 4,
                  color: 'white',
                }}
              >
                子节点 #{num}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default OnChildListChangeDemo
