import listToTree from '../../../../packages/learn-utils/src/handwritten/listToTree'

const normalDemo = () => {
  const list = [
    { id: '1', pid: '', name: '根节点1' },
    { id: '2', pid: '1', name: '子节点1-1' },
    { id: '3', pid: '1', name: '子节点1-2' },
    { id: '4', pid: '2', name: '子节点1-1-1' },
    { id: '5', pid: '', name: '根节点2' },
    { id: '6', pid: '5', name: '子节点2-1' },
  ]

  const tree = listToTree(list)

  return {
    flatList: list,
    treeStructure: tree,
  }
}

export default normalDemo
