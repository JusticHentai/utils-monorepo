export default class Trie {
  // 根节点
  children: Record<string, any> = {}

  constructor() {}

  insert(word: string): void {
    let node = this.children

    for (const char of word) {
      if (!node[char]) {
        node[char] = {}
      }

      node = node[char]
    }

    node.isEnd = true
  }

  searchPrefix(prefix: string) {
    let node = this.children

    for (const char of prefix) {
      if (!node[char]) {
        return false
      }

      node = node[char]
    }

    return node
  }

  search(word: string): boolean {
    const node = this.searchPrefix(word)

    // @ts-ignore any
    return !!node && !!node.isEnd
  }

  startsWith(prefix: string): boolean {
    return !!this.searchPrefix(prefix)
  }
}
