import '../../.css/index.css'
import {
  changeClassDemo,
  changeDataDemo,
  changeStyleDemo,
  cleanupDemo,
} from './basicDemo'
import {
  changeClassFilterDemo,
  changeDataFilterDemo,
  cleanupFilterDemo,
} from './filterDemo'
import { useEffect, useRef, useState } from 'react'
import onAttributeChange from '../../../packages/element-utils/src/onAttributeChange'
import { action } from 'storybook/actions'

const OnAttributeChangeDemo = () => {
  const basicRef = useRef<HTMLDivElement>(null)
  const filterRef = useRef<HTMLDivElement>(null)
  const [basicInited, setBasicInited] = useState(false)
  const [filterInited, setFilterInited] = useState(false)

  useEffect(() => {
    if (!basicInited || !basicRef.current) return

    const stop = onAttributeChange(
      basicRef.current,
      (attributeName, oldValue, newValue) => {
        action('属性变化')({
          属性名: attributeName,
          旧值: oldValue,
          新值: newValue,
        })
      }
    )

    // 注册元素供 demo 使用
    ;(window as any).__attributeChangeBasicEl = basicRef.current

    action('初始化成功')('点击按钮修改属性触发回调')

    return () => {
      stop()
      delete (window as any).__attributeChangeBasicEl
    }
  }, [basicInited])

  useEffect(() => {
    if (!filterInited || !filterRef.current) return

    const stop = onAttributeChange(
      filterRef.current,
      (attributeName, oldValue, newValue) => {
        action('class 属性变化')({
          属性名: attributeName,
          旧值: oldValue,
          新值: newValue,
        })
      },
      ['class']
    )

    // 注册元素供 demo 使用
    ;(window as any).__attributeChangeFilterEl = filterRef.current

    action('初始化成功')('只监听 class 属性，其他属性变化不会触发回调')

    return () => {
      stop()
      delete (window as any).__attributeChangeFilterEl
    }
  }, [filterInited])

  const handleInitBasic = () => {
    setBasicInited(true)
  }

  const handleCleanupBasic = () => {
    setBasicInited(false)
    cleanupDemo()
  }

  const handleInitFilter = () => {
    setFilterInited(true)
  }

  const handleCleanupFilter = () => {
    setFilterInited(false)
    cleanupFilterDemo()
  }

  return (
    <div>
      <div className="button" onClick={handleInitBasic}>
        初始化基础示例
      </div>
      <div className="button" onClick={changeClassDemo}>
        修改 class
      </div>
      <div className="button" onClick={changeDataDemo}>
        修改 data-value
      </div>
      <div className="button" onClick={changeStyleDemo}>
        修改 style
      </div>
      <div className="button" onClick={handleCleanupBasic}>
        清理基础示例
      </div>
      <div className="button" onClick={handleInitFilter}>
        初始化过滤示例 (只监听 class)
      </div>
      <div className="button" onClick={changeClassFilterDemo}>
        修改 class (会触发)
      </div>
      <div className="button" onClick={changeDataFilterDemo}>
        修改 data-value (不触发)
      </div>
      <div className="button" onClick={handleCleanupFilter}>
        清理过滤示例
      </div>

      {/* 演示区域 - 放在按钮下方 */}
      <div style={{ marginTop: 40, display: 'flex', gap: 20, flexWrap: 'wrap' }}>
        {basicInited && (
          <div
            ref={basicRef}
            id="attribute-change-demo"
            data-value="initial"
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
        )}
        {filterInited && (
          <div
            ref={filterRef}
            id="attribute-filter-demo"
            data-value="initial"
            style={{
              width: 200,
              height: 100,
              background: 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)',
              borderRadius: 8,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontWeight: 'bold',
            }}
          >
            只监听 class
          </div>
        )}
      </div>
    </div>
  )
}

export default OnAttributeChangeDemo
