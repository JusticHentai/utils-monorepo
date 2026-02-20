import '../../.css/index.css'
import useToggle from '../../../packages/element-utils/src/useToggle'
import { action } from 'storybook/actions'

const UseToggleDemo = () => {
  // 基础布尔切换
  const [boolState, boolActions] = useToggle()
  // 自定义值切换
  const [customState, customActions] = useToggle('Hello', 'World')

  return (
    <div>
      <div style={{ marginBottom: 16, fontWeight: 'bold' }}>基础布尔切换</div>
      <div style={{ marginBottom: 8 }}>
        当前值：<span style={{ color: '#1890ff' }}>{String(boolState)}</span>
      </div>
      <div
        className="button"
        onClick={() => {
          boolActions.toggle()
          action('toggle 布尔值')(!boolState)
        }}
      >
        Toggle
      </div>
      <div
        className="button"
        onClick={() => {
          boolActions.setLeft()
          action('setLeft')('设置为 false')
        }}
      >
        Set False (setLeft)
      </div>
      <div
        className="button"
        onClick={() => {
          boolActions.setRight()
          action('setRight')('设置为 true')
        }}
      >
        Set True (setRight)
      </div>

      <div style={{ margin: '24px 0 16px', fontWeight: 'bold' }}>
        自定义值切换
      </div>
      <div style={{ marginBottom: 8 }}>
        当前值：<span style={{ color: '#52c41a' }}>{customState}</span>
      </div>
      <div
        className="button"
        onClick={() => {
          customActions.toggle()
          action('toggle 自定义值')(
            customState === 'Hello' ? 'World' : 'Hello'
          )
        }}
      >
        Toggle (Hello/World)
      </div>
      <div
        className="button"
        onClick={() => {
          customActions.set('Hello')
          action('set')('Hello')
        }}
      >
        Set Hello
      </div>
      <div
        className="button"
        onClick={() => {
          customActions.set('World')
          action('set')('World')
        }}
      >
        Set World
      </div>
      <div
        className="button"
        onClick={() => {
          customActions.setLeft()
          action('setLeft')('Hello')
        }}
      >
        Set Left (Hello)
      </div>
      <div
        className="button"
        onClick={() => {
          customActions.setRight()
          action('setRight')('World')
        }}
      >
        Set Right (World)
      </div>
    </div>
  )
}

export default UseToggleDemo
