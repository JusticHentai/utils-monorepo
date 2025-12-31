import mergeStyle from '../../../packages/element-utils/src/mergeStyle'

const arrayDemo = () => {
  const result = mergeStyle(
    { width: '100px' },
    [{ height: '100px' }, { color: 'red' }],
    null,
    undefined
  )

  return { style: result }
}

export default arrayDemo
