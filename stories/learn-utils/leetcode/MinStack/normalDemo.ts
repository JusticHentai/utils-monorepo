import MinStack from '../../../../packages/learn-utils/src/leetcode/MinStack'

const normalDemo = () => {
  const minStack = new MinStack()

  minStack.push(-2)
  minStack.push(0)
  minStack.push(-3)
  const min1 = minStack.getMin() // -3
  minStack.pop()
  const top = minStack.top() // 0
  const min2 = minStack.getMin() // -2

  return {
    operations: ['push(-2)', 'push(0)', 'push(-3)', 'getMin()', 'pop()', 'top()', 'getMin()'],
    results: [null, null, null, min1, null, top, min2],
    expected: [null, null, null, -3, null, 0, -2],
  }
}

export default normalDemo
