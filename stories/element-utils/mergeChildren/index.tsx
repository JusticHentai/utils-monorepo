import { action } from 'storybook/actions'
import '../../.css/index.css'
import mergeChildren from '../../../packages/element-utils/src/mergeChildren'

const MergeChildrenDemo = () => {
  const children = ['Hello', ' ', 'World', 123]
  const merged = mergeChildren(children)

  return (
    <div>
      <div
        className="storybook-button storybook-button-gap"
        onClick={() => {
          action('原始子元素')(children)
          action('合并后子元素')(merged)
        }}
      >
        查看合并效果
      </div>
      <div style={{ marginTop: 20 }}>
        <div>原始: {children}</div>
        <div>合并后: {merged}</div>
      </div>
    </div>
  )
}

export default MergeChildrenDemo
