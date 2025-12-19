import deepMerge from '../../../packages/js-utils/src/deepMerge'

const arrayDemo = () => {
  const obj = [1, { a: 2 }]
  const source = [{ b: 3 }, 4]
  const merged = deepMerge(obj, source)

  return {
    obj,
    source,
    merged,
  }
}

export default arrayDemo
