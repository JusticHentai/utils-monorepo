import mergeClass from '../../../packages/element-utils/src/mergeClass'

const falsyDemo = () => {
  const result = mergeClass(
    'class1',
    undefined,
    null,
    false,
    'class2'
  )

  return { className: result }
}

export default falsyDemo
