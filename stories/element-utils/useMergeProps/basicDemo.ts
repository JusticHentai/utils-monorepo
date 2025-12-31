const basicDemo = () => {
  return {
    message: 'useMergeProps 用于合并组件默认属性',
    example: `
const defaultProps = { a: 1 }
const { a, b } = useMergeProps(defaultProps, props)
// a 默认为 1，如果 props.a 有值则使用 props.a
    `.trim(),
  }
}

export default basicDemo
