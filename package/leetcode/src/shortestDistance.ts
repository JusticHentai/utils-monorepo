export function shortestDistance(
  wordsDict: string[],
  word1: string,
  word2: string
): number {
  const length = wordsDict.length

  let res = length

  let index1 = -1,
    index2 = -1

  for (let i = 0; i < length; i++) {
    const word = wordsDict[i]

    if (word === word1) {
      index1 = i
    } else if (word === word2) {
      index2 = i
    }

    if (index1 >= 0 && index2 >= 0) {
      res = Math.min(res, Math.abs(index1 - index2))
    }
  }

  return res
}
