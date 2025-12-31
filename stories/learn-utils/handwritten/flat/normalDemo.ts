import flat from '../../../../packages/learn-utils/src/handwritten/flat'

const normalDemo = () => {
  const arr = [1, [2, [3, [4, 5]]]]

  return {
    original: arr,
    flat1: flat(arr, 1), // [1, 2, [3, [4, 5]]]
    flat2: flat(arr, 2), // [1, 2, 3, [4, 5]]
    flatInfinity: flat(arr, Infinity), // [1, 2, 3, 4, 5]
  }
}

export default normalDemo
