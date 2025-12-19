import walk from '../../../packages/js-utils/src/walk'

const normalDemo = async () => {
  const obj = {
    a: 1,
    b: {
      c: 2,
      d: 3,
    },
    e: [4, 5],
  }

  await walk(obj, ({ key, value, parent }) => {
    return value * 2
  })

  return obj
}

export default normalDemo
