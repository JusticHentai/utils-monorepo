import deepMerge from '../../../packages/js-utils/src/deepMerge'

const normalDemo = () => {
  const obj = { a: 1, b: { c: 2 } }
  const source = { b: { d: 3 }, e: 4 }
  const merged = deepMerge(obj, source)

  return {
    obj,
    source,
    merged,
  }
}

export default normalDemo
