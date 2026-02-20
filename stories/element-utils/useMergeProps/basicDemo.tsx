import { action } from 'storybook/actions'
import useMergeProps from '../../../packages/element-utils/src/useMergeProps'

interface DemoProps {
  name?: string
  age: number
}

const defaultProps = {
  name: '默认名称',
}

const useBasicDemo = () => {
  const props: DemoProps = { age: 25 }
  const mergedProps = useMergeProps(defaultProps, props)

  const showMergedProps = () => {
    action('默认属性')(defaultProps)
    action('传入属性')(props)
    action('合并后的属性')(mergedProps)
  }

  return {
    showMergedProps,
  }
}

export default useBasicDemo
