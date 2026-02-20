import '../../.css/index.css'
import { useEffect, useRef, useState } from 'react'
import createLazyLoadObserver from '../../../packages/element-utils/src/createLazyLoadObserver'
import { action } from 'storybook/actions'

const ITEM_COUNT = 10

const CreateLazyLoadObserverDemo = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [inited, setInited] = useState(false)
  const [loadedItems, setLoadedItems] = useState<Set<number>>(new Set())

  useEffect(() => {
    if (!inited || !containerRef.current) return

    const elements = Array.from(containerRef.current.querySelectorAll('.lazy-item'))

    const stop = createLazyLoadObserver(
      elements,
      (element) => {
        const index = Number((element as HTMLElement).dataset.index)
        setLoadedItems((prev) => new Set([...prev, index]))
        action(`元素 #${index} 进入视口`)('执行加载函数')
      },
      { rootMargin: '50px' }
    )

    action('初始化成功')('滚动容器查看懒加载效果，设置 rootMargin: 50px 提前加载')

    return () => {
      stop()
    }
  }, [inited])

  const handleInit = () => {
    setInited(true)
    setLoadedItems(new Set())
  }

  const handleCleanup = () => {
    setInited(false)
    setLoadedItems(new Set())
    action('清理完成')()
  }

  return (
    <div>
      <div className="button" onClick={handleInit}>
        初始化懒加载示例
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
              height: 300,
              overflowY: 'auto',
              background: '#f5f5f5',
              borderRadius: 8,
              padding: 10,
            }}
          >
            {Array.from({ length: ITEM_COUNT }).map((_, i) => (
              <div
                key={i}
                className="lazy-item"
                data-index={i}
                style={{
                  width: '100%',
                  height: 100,
                  marginBottom: 10,
                  background: loadedItems.has(i)
                    ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
                    : '#ddd',
                  borderRadius: 4,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: loadedItems.has(i) ? 'white' : '#666',
                  fontSize: 14,
                }}
              >
                {loadedItems.has(i) ? `已加载 #${i}` : `未加载 #${i}`}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default CreateLazyLoadObserverDemo
