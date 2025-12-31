import Trie from '../../../../packages/learn-utils/src/leetcode/Trie'

const normalDemo = () => {
  const trie = new Trie()

  trie.insert('apple')
  const search1 = trie.search('apple') // true
  const search2 = trie.search('app') // false
  const startsWith1 = trie.startsWith('app') // true
  trie.insert('app')
  const search3 = trie.search('app') // true

  return {
    operations: ['insert("apple")', 'search("apple")', 'search("app")', 'startsWith("app")', 'insert("app")', 'search("app")'],
    results: [null, search1, search2, startsWith1, null, search3],
    expected: [null, true, false, true, null, true],
  }
}

export default normalDemo
