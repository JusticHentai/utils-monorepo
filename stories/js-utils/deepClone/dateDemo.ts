import deepClone from '../../../packages/js-utils/src/deepClone'

const dateDemo = () => {
  const date = new Date('2023-01-01')
  const cloned = deepClone(date)

  return {
    original: date,
    cloned,
    isDate: cloned instanceof Date,
    isEqual: date.getTime() === cloned.getTime(),
  }
}

export default dateDemo
