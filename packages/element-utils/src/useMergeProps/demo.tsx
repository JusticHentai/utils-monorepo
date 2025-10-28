import useMergeProps from '.'

interface Props {
  a?: number
  b: number
}

const defaultProps = {
  a: 1,
}

const Demo = (props: Props) => {
  const { a, b } = useMergeProps(defaultProps, props)

  console.log(a, b) // 1 props.b

  return <></>
}

export default Demo
