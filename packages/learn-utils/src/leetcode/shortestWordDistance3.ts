export function shortestWordDistance(
  wordsDict: string[],
  word1: string,
  word2: string
): number {
  const length = wordsDict.length

  let res = length

  if (word1 === word2) {
    let prev = -1

    for (let i = 0; i < length; i++) {
      const word = wordsDict[i]

      if (word === word1) {
        if (prev >= 0) {
          res = Math.min(res, i - prev)
        }

        prev = i
      }
    }

    return res
  } else {
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
}
