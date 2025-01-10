export class TreeAncestor {
  dp: number[][] = []

  constructor(n: number, parent: number[]) {
    for (let i = 0; i < n; i++) {
      this.dp[i] = [parent[i]]
    }

    for (let j = 1; ; j++) {
      let flag = true

      for (let i = 0; i < n; i++) {
        const temp =
          this.dp[i][j - 1] !== -1 ? this.dp[this.dp[i][j - 1]][j - 1] : -1

        this.dp[i].push(temp)

        if (temp !== -1) flag = false
      }

      if (flag) break
    }
  }

  getKthAncestor(node: number, k: number): number {
    let res = node

    let pos = 0

    while (k && res !== -1) {
      if (pos >= this.dp[res].length) return -1

      if (k & 1) res = this.dp[res][pos]

      k >>= 1

      pos++
    }

    return res
  }
}
