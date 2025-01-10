/**
 * 替换空格
 */
export default function replaceSpace(s: string): string {
  const sList = s.split('')

  const oldLength = s.length

  let spaceCount = 0

  for (const item of sList) {
    if (item === ' ') spaceCount++
  }

  sList.length += spaceCount * 2

  for (let i = oldLength - 1, j = sList.length - 1; i >= 0; i--, j--) {
    if (sList[i] !== ' ') {
      sList[j] = sList[i]
    } else {
      sList[j - 2] = '%'
      sList[j - 1] = '2'
      sList[j] = '0'
      j -= 2
    }
  }

  return sList.join('')
}
