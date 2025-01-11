type Item = {
  id: string
  pid: string
} & Record<string, any>

export default function listToTree(list: Item[]) {
  const treeList: Item[] = [],
    hash: Record<string, any> = {}

  list.forEach((item) => {
    if (!item.children) {
      item.children = []
    }

    hash[item.id] = item
  })

  list.forEach((item) => {
    const parent = hash[item.pid]

    if (parent) {
      parent.children.push(item)
    } else {
      treeList.push(item)
    }
  })

  return treeList
}
