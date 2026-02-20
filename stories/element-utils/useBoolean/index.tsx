import { action } from 'storybook/actions'
import useBoolean from '../../../packages/element-utils/src/useBoolean'
import '../../.css/index.css'

const UseBooleanDemo = () => {
  const [visible, { setTrue, setFalse, toggle, set }] = useBoolean(false)

  return (
    <div>
      <div style={{ marginBottom: 16, fontWeight: 'bold' }}>布尔状态管理</div>
      <div style={{ marginBottom: 8 }}>
        当前值：
        <span style={{ color: visible ? '#52c41a' : '#ff4d4f' }}>
          {String(visible)}
        </span>
      </div>
      <div
        className="button"
        onClick={() => {
          toggle()
          action('toggle')(!visible)
        }}
      >
        Toggle
      </div>
      <div
        className="button"
        onClick={() => {
          setTrue()
          action('setTrue')('设置为 true')
        }}
      >
        Set True
      </div>
      <div
        className="button"
        onClick={() => {
          setFalse()
          action('setFalse')('设置为 false')
        }}
      >
        Set False
      </div>
      <div
        className="button"
        onClick={() => {
          set(true)
          action('set')(true)
        }}
      >
        Set(true)
      </div>
      <div
        className="button"
        onClick={() => {
          set(false)
          action('set')(false)
        }}
      >
        Set(false)
      </div>

      {/* 演示区域 */}
      <div style={{ marginTop: 24 }}>
        <div
          style={{
            width: 200,
            height: 100,
            background: visible
              ? 'linear-gradient(135deg, #52c41a 0%, #73d13d 100%)'
              : 'linear-gradient(135deg, #ff4d4f 0%, #ff7875 100%)',
            borderRadius: 8,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontWeight: 'bold',
            transition: 'all 0.3s',
          }}
        >
          {visible ? '显示中' : '隐藏中'}
        </div>
      </div>
    </div>
  )
}

export default UseBooleanDemo
