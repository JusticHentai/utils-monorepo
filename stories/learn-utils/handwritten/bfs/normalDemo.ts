import { bfs1, bfs2, bfs3 } from '../../../../packages/learn-utils/src/handwritten/bfs'

const normalDemo = () => {
  const treeData = [
    {
      id: 1,
      name: '根节点1',
      children: [
        {
          id: 2,
          name: '子节点1-1',
          children: [{ id: 4, name: '子节点1-1-1', children: [] }],
        },
        { id: 3, name: '子节点1-2', children: [] },
      ],
    },
    {
      id: 5,
      name: '根节点2',
      children: [{ id: 6, name: '子节点2-1', children: [] }],
    },
  ]

  return {
    treeData: '树形数据结构',
    bfs1Result: bfs1(treeData), // 每层节点数量
    bfs2Result: bfs2(treeData), // 带去重的每层节点数量
    bfs3Result: bfs3(treeData, 4), // 查找 id=4 的节点名称
  }
}

export default normalDemo
