import { action } from 'storybook/actions'
import '../../.css/index.css'
import useMergeProps from '../../../packages/element-utils/src/useMergeProps'

interface DemoProps {
  name?: string
  age: number
}

const defaultProps = {
  name: '默认名称',
}

const UseMergePropsDemo = () => {
  const props: DemoProps = { age: 25 }
  const mergedProps = useMergeProps(defaultProps, props)

  return (
    <div>
      <div
        className="storybook-button storybook-button-gap"
        onClick={() => {
          action('合并后的属性')(mergedProps)
        }}
      >
        查看合并后的属性
      </div>
    </div>
  )
}

export default UseMergePropsDemo
