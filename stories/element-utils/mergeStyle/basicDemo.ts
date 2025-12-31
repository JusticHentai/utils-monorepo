import mergeStyle from '../../../packages/element-utils/src/mergeStyle'

const basicDemo = () => {
  const result = mergeStyle(
    { width: '100px', height: '100px' },
    { width: '200px', position: 'absolute' as const }
  )

  return { style: result }
}

export default basicDemo
