export default function letterCombinations(digits: string): string[] {
  if (!digits && !digits.length) {
    return []
  }

  const n = digits.length
  const map = {
    '2': 'abc',
    '3': 'def',
    '4': 'ghi',
    '5': 'jkl',
    '6': 'mno',
    '7': 'pqrs',
    '8': 'tuv',
    '9': 'wxyz',
  }

  const queue = []
  queue.push('')

  for (let i = 0; i < n; i++) {
    const levelSize = queue.length

    for (let j = 0; j < levelSize; j++) {
      const currentStr = queue.shift()

      // @ts-ignore any
      const letters = map[digits[i]]

      for (const l of letters) {
        queue.push(currentStr + l)
      }
    }
  }

  return queue
}
