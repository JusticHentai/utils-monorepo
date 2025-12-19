import deepClone from '../../../packages/js-utils/src/deepClone'

const circularDemo = () => {
  const obj: any = { a: 1 }
  obj.self = obj

  const cloned = deepClone(obj)

  return {
    original: obj,
    cloned,
    isCircular: cloned.self === cloned,
  }
}

export default circularDemo
