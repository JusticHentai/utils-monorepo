import { useEffect, useState } from 'react'
import { action } from 'storybook/actions'
import onPageUnload from '../../../packages/element-utils/src/onPageUnload'
import '../../.css/index.css'

const OnPageUnloadDemo = () => {
  const [isListening, setIsListening] = useState(false)
  const [usePagehide, setUsePagehide] = useState(true)

  useEffect(() => {
    if (!isListening) return

    const stop = onPageUnload(() => {
      action('页面卸载')(
        usePagehide ? 'pagehide 事件触发' : 'beforeunload 事件触发'
      )
    }, usePagehide)

    action('开始监听')(`使用 ${usePagehide ? 'pagehide' : 'beforeunload'} 事件`)

    return () => {
      stop()
      action('停止监听')('已清理监听器')
    }
  }, [isListening, usePagehide])

  return (
    <div>
      <div className="button" onClick={() => setIsListening(true)}>
        开始监听页面卸载
      </div>
      <div className="button" onClick={() => setIsListening(false)}>
        停止监听
      </div>
      <div className="button" onClick={() => setUsePagehide(!usePagehide)}>
        切换事件类型
      </div>

      <div className="card">
        <p>监听状态: {isListening ? '监听中' : '未监听'}</p>
        <p>事件类型: {usePagehide ? 'pagehide（推荐）' : 'beforeunload'}</p>
        <p className="desc">提示：关闭标签页或导航到其他页面时触发</p>
      </div>
    </div>
  )
}

export default OnPageUnloadDemo
