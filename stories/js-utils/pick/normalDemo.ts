import pick from '../../../packages/js-utils/src/pick'

const normalDemo = () => {
  const obj = { a: 1, b: 2, c: 3 }
  const picked = pick(obj, ['a', 'c'])

  return {
    original: obj,
    picked,
  }
}

export default normalDemo
