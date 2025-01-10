import isDAG from '../src/isDAG'

test('测试 src/isDAG.ts', () => {
  expect(
    isDAG([
      ['a', 'b'],
      ['b', 'c'],
      ['c', 'a'],
    ])
  ).toBe(false)
})
