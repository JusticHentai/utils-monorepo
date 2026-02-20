import '../../.css/index.css'
import { useRef, useState } from 'react'
import useClickAway from '../../../packages/element-utils/src/useClickAway'
import { action } from 'storybook/actions'

const UseClickAwayDemo = () => {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLDivElement>(null)

  useClickAway(
    () => {
      if (isOpen) {
        setIsOpen(false)
        action('点击外部')('下拉菜单已关闭')
      }
    },
    [dropdownRef, buttonRef]
  )

  return (
    <div>
      <div style={{ marginBottom: 16, fontWeight: 'bold' }}>点击外部关闭</div>
      <div style={{ marginBottom: 8, color: '#666' }}>
        点击按钮打开下拉菜单，点击外部区域关闭：
      </div>

      <div style={{ position: 'relative' }}>
        <div
          ref={buttonRef}
          className="button"
          onClick={() => {
            setIsOpen(!isOpen)
            action('点击按钮')(isOpen ? '关闭' : '打开')
          }}
        >
          {isOpen ? '点击关闭' : '点击打开'} 下拉菜单
        </div>

        {isOpen && (
          <div
            ref={dropdownRef}
            style={{
              marginTop: 8,
              padding: 16,
              background: 'white',
              border: '1px solid #d9d9d9',
              borderRadius: 8,
              boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
            }}
          >
            <div style={{ marginBottom: 8 }}>菜单项 1</div>
            <div style={{ marginBottom: 8 }}>菜单项 2</div>
            <div>菜单项 3</div>
          </div>
        )}
      </div>

      <div style={{ marginTop: 24, color: '#999', fontSize: 12 }}>
        提示：点击下拉菜单外部区域会触发关闭
      </div>
    </div>
  )
}

export default UseClickAwayDemo
