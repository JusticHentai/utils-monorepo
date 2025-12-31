import mergeClass from '../../../packages/element-utils/src/mergeClass'

const basicDemo = () => {
  const result = mergeClass(
    'class1',
    ['class2', 'class3'],
    { class4: true, class5: false }
  )

  return { className: result }
}

export default basicDemo
