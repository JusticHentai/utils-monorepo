export class WordDistance {
  map: Map<string, number[]> = new Map()

  // 构建哈希表
  constructor(wordsDict: string[]) {
    const length = wordsDict.length

    for (let i = 0; i < length; i++) {
      const word = wordsDict[i]

      if (!this.map.has(word)) {
        this.map.set(word, [])
      }

      ;(this.map.get(word) as number[]).push(i)
    }
  }

  shortest(word1: string, word2: string): number {
    const indices1 = this.map.get(word1) as number[]

    const indices2 = this.map.get(word2) as number[]

    const size1 = indices1.length,
      size2 = indices2.length

    let pos1 = 0,
      pos2 = 0

    let res = Number.MAX_VALUE

    while (pos1 < size1 && pos2 < size2) {
      const index1 = indices1[pos1],
        index2 = indices2[pos2]
      res = Math.min(res, Math.abs(index1 - index2))

      index1 < index2 ? pos1++ : pos2++
    }

    return res
  }
}
