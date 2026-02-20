import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as r}from"./index-Dgaj45eM.js";import{C as i}from"./blocks-Yd0TQZ2J.js";import"./iframe-BWchUvSv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRQ9sIcz.js";const l=`import { action } from 'storybook/actions'
import createVirtualList from '../../../packages/element-utils/src/virtualList'

/**
 * 基础用法：创建虚拟列表并计算可见项
 * 模拟 1000 条数据、300px 容器高度、每项 50px 预估高度
 */
const basicDemo = () => {
  const items = Array.from({ length: 1000 }, (_, i) => ({
    id: i,
    text: \`Item \${i}\`,
  }))

  const virtualList = createVirtualList({
    items,
    containerHeight: 300,
    estimatedItemHeight: 50,
  })

  const result = virtualList.calculateVisibleItems(0)

  action('总高度')(virtualList.getTotalHeight())
  action('scrollTop=0 时的可见项')(result)
  action('可见项数量')(result.visibleItems.length)
  action('startIndex')(result.startIndex)
  action('endIndex')(result.endIndex)
}

export default basicDemo
`,c=`import { action } from 'storybook/actions'
import createVirtualList from '../../../packages/element-utils/src/virtualList'

/**
 * 滚动计算：模拟不同滚动位置下的可见项变化
 * 演示 calculateVisibleItems 在不同 scrollTop 下返回不同区间
 */
const scrollDemo = () => {
  const items = Array.from({ length: 500 }, (_, i) => ({
    id: i,
    text: \`Item \${i}\`,
  }))

  const virtualList = createVirtualList({
    items,
    containerHeight: 300,
    estimatedItemHeight: 40,
  })

  const scrollPositions = [0, 200, 1000, 5000, 15000]

  scrollPositions.forEach((scrollTop) => {
    const result = virtualList.calculateVisibleItems(scrollTop)
    action(\`scrollTop=\${scrollTop}\`)({
      startIndex: result.startIndex,
      endIndex: result.endIndex,
      visibleCount: result.visibleItems.length,
      firstItem: result.visibleItems[0]?.data,
      lastItem: result.visibleItems[result.visibleItems.length - 1]?.data,
    })
  })
}

export default scrollDemo
`,d=`import { action } from 'storybook/actions'
import createVirtualList from '../../../packages/element-utils/src/virtualList'

/**
 * 动态高度：演示 updateItemHeight 更新实际高度后的计算差异
 * 模拟部分项高度不同于预估值的场景
 */
const dynamicHeightDemo = () => {
  const items = Array.from({ length: 100 }, (_, i) => ({
    id: i,
    text: \`Item \${i}\`,
  }))

  const virtualList = createVirtualList({
    items,
    containerHeight: 300,
    estimatedItemHeight: 50,
  })

  action('更新前 - 总高度')(virtualList.getTotalHeight())

  const beforeResult = virtualList.calculateVisibleItems(0)
  action('更新前 - 可见项范围')({
    startIndex: beforeResult.startIndex,
    endIndex: beforeResult.endIndex,
  })

  // 模拟前 5 项实际高度为 100px（预估的 2 倍）
  for (let i = 0; i < 5; i++) {
    virtualList.updateItemHeight(i, 100)
  }

  action('更新后 - 总高度')(virtualList.getTotalHeight())

  const afterResult = virtualList.calculateVisibleItems(0)
  action('更新后 - 可见项范围')({
    startIndex: afterResult.startIndex,
    endIndex: afterResult.endIndex,
  })

  action('高度差异')(
    virtualList.getTotalHeight() - items.length * 50
  )
}

export default dynamicHeightDemo
`,o=`import { action } from 'storybook/actions'
import createVirtualList from '../../../packages/element-utils/src/virtualList'

/**
 * 滚动到指定索引：演示 getScrollTopForIndex 计算目标 scrollTop
 * 常用于"跳转到第 N 项"的场景
 */
const scrollToIndexDemo = () => {
  const items = Array.from({ length: 1000 }, (_, i) => ({
    id: i,
    text: \`Item \${i}\`,
  }))

  const virtualList = createVirtualList({
    items,
    containerHeight: 300,
    estimatedItemHeight: 50,
  })

  const targetIndices = [0, 10, 50, 100, 500, 999]

  targetIndices.forEach((index) => {
    const scrollTop = virtualList.getScrollTopForIndex(index)
    const visibleItems = virtualList.calculateVisibleItems(scrollTop)
    action(\`跳转到 Item \${index}\`)({
      scrollTop,
      startIndex: visibleItems.startIndex,
      endIndex: visibleItems.endIndex,
    })
  })
}

export default scrollToIndexDemo
`,h=`import { action } from 'storybook/actions'
import createVirtualList from '../../../packages/element-utils/src/virtualList'

/**
 * 重置测量数据：演示 reset 方法清除所有已缓存的高度信息
 * 常用于列表数据源变化后需要重新计算的场景
 */
const resetDemo = () => {
  const items = Array.from({ length: 100 }, (_, i) => ({
    id: i,
    text: \`Item \${i}\`,
  }))

  const virtualList = createVirtualList({
    items,
    containerHeight: 300,
    estimatedItemHeight: 50,
  })

  // 更新部分项高度
  for (let i = 0; i < 10; i++) {
    virtualList.updateItemHeight(i, 80)
  }

  action('更新后总高度')(virtualList.getTotalHeight())

  // 重置所有测量数据
  virtualList.reset()

  action('重置后总高度（恢复为预估值）')(virtualList.getTotalHeight())
  action('前后差值')(
    items.length * 50 - virtualList.getTotalHeight()
  )
}

export default resetDemo
`;function s(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"createvirtuallist",children:"createVirtualList"}),`
`,e.jsx(n.p,{children:"创建虚拟列表实例，用于高效计算大数据量列表在滚动时的可见项范围，支持动态高度。"}),`
`,e.jsx(n.h2,{id:"详细介绍",children:"详细介绍"}),`
`,e.jsxs(n.p,{children:["虚拟列表（Virtual List）是一种前端性能优化技术，核心思想是",e.jsx(n.strong,{children:"只渲染当前视口内可见的列表项"}),"，而不是一次性渲染全部数据。当列表数据量达到上千甚至上万条时，全量渲染会导致大量 DOM 节点堆积，引发严重的性能问题（卡顿、内存暴涨）。"]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"createVirtualList"})," 提供了一个纯计算层的虚拟列表引擎，它不依赖任何 UI 框架，只负责根据滚动位置（scrollTop）计算出当前应该渲染哪些项、每项的偏移量和高度，以及整个列表的总高度。使用者拿到计算结果后自行渲染 DOM，从而实现框架无关的虚拟滚动。"]}),`
`,e.jsx(n.p,{children:"主要特性："}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"动态高度支持"}),"：每项高度可以不同，通过 ",e.jsx(n.code,{children:"updateItemHeight"})," 动态更新实际高度"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"二分查找定位"}),"：使用二分查找算法快速定位起始索引，时间复杂度 O(log n)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"缓冲区机制"}),"：通过 ",e.jsx(n.code,{children:"overScan"})," 参数在可见区域上下额外渲染缓冲项，防止快速滚动时出现空白"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"滚动到指定位置"}),"：支持通过索引计算 scrollTop，实现跳转到指定项"]}),`
`]}),`
`,e.jsx(n.h2,{id:"基础用法",children:"基础用法"}),`
`,e.jsxs(n.p,{children:["创建虚拟列表实例，传入数据、容器高度和预估项高度，调用 ",e.jsx(n.code,{children:"calculateVisibleItems"})," 获取当前可见项："]}),`
`,e.jsx(i,{language:"typescript",children:l}),`
`,e.jsx(n.h2,{id:"滚动计算",children:"滚动计算"}),`
`,e.jsxs(n.p,{children:["模拟不同滚动位置下的可见项变化，展示 ",e.jsx(n.code,{children:"calculateVisibleItems"})," 如何根据 scrollTop 返回不同的可见区间："]}),`
`,e.jsx(i,{language:"typescript",children:c}),`
`,e.jsx(n.h2,{id:"动态高度",children:"动态高度"}),`
`,e.jsxs(n.p,{children:["演示 ",e.jsx(n.code,{children:"updateItemHeight"})," 更新实际测量高度后，总高度和可见项范围的变化。在实际场景中，列表项渲染后通过 DOM 测量获取真实高度，再反馈给虚拟列表引擎："]}),`
`,e.jsx(i,{language:"typescript",children:d}),`
`,e.jsx(n.h2,{id:"滚动到指定索引",children:"滚动到指定索引"}),`
`,e.jsxs(n.p,{children:["使用 ",e.jsx(n.code,{children:"getScrollTopForIndex"}),' 计算跳转到指定项所需的 scrollTop 值，常用于"回到顶部"或"跳转到第 N 项"功能：']}),`
`,e.jsx(i,{language:"typescript",children:o}),`
`,e.jsx(n.h2,{id:"重置测量数据",children:"重置测量数据"}),`
`,e.jsxs(n.p,{children:["使用 ",e.jsx(n.code,{children:"reset"})," 方法清除所有已缓存的高度测量数据，使所有项恢复为预估高度。常用于列表数据源发生变化后需要重新计算的场景："]}),`
`,e.jsx(i,{language:"typescript",children:h}),`
`,e.jsx(n.h2,{id:"参数介绍",children:"参数介绍"}),`
`,e.jsx(n.h3,{id:"virtuallistoptions配置项",children:"VirtualListOptions（配置项）"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"参数名"}),e.jsx("th",{children:"类型"}),e.jsx("th",{children:"必填"}),e.jsx("th",{children:"描述"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"items"}),e.jsx("td",{children:e.jsx("code",{children:"T[]"})}),e.jsx("td",{children:"是"}),e.jsx("td",{children:"列表数据数组"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"containerHeight"}),e.jsx("td",{children:e.jsx("code",{children:"number"})}),e.jsx("td",{children:"是"}),e.jsx("td",{children:"容器可视区域高度（px）"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"estimatedItemHeight"}),e.jsx("td",{children:e.jsx("code",{children:"number"})}),e.jsx("td",{children:"是"}),e.jsx("td",{children:"预估的每项高度（px），用于未测量项的初始计算"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"overScan"}),e.jsx("td",{children:e.jsx("code",{children:"number"})}),e.jsx("td",{children:"否"}),e.jsx("td",{children:"缓冲区项数，默认 3。在可见区域上下额外渲染的项数，防止快速滚动时出现空白"})]})]})]}),`
`,e.jsx(n.h3,{id:"virtuallistinstance返回实例方法",children:"VirtualListInstance（返回实例方法）"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"方法名"}),e.jsx("th",{children:"类型"}),e.jsx("th",{children:"描述"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"calculateVisibleItems"}),e.jsx("td",{children:e.jsx("code",{children:"(scrollTop: number) => VirtualListResult<T>"})}),e.jsx("td",{children:"根据滚动位置计算当前可见项列表、总高度、起止索引"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"updateItemHeight"}),e.jsx("td",{children:e.jsx("code",{children:"(index: number, height: number) => void"})}),e.jsx("td",{children:"更新指定项的实际测量高度"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"getTotalHeight"}),e.jsx("td",{children:e.jsx("code",{children:"() => number"})}),e.jsx("td",{children:"获取列表总高度（已测量项用实际值，未测量项用预估值）"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"getScrollTopForIndex"}),e.jsx("td",{children:e.jsx("code",{children:"(index: number) => number"})}),e.jsx("td",{children:"获取滚动到指定索引所需的 scrollTop 值"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"reset"}),e.jsx("td",{children:e.jsx("code",{children:"() => void"})}),e.jsx("td",{children:"重置所有高度测量数据，恢复为预估值"})]})]})]}),`
`,e.jsx(n.h3,{id:"virtuallistresult计算结果",children:"VirtualListResult（计算结果）"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"属性名"}),e.jsx("th",{children:"类型"}),e.jsx("th",{children:"描述"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"visibleItems"}),e.jsx("td",{children:e.jsx("code",{children:"VirtualItem<T>[]"})}),e.jsx("td",{children:"当前可见项数组，每项包含 data、index、offset、height"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"totalHeight"}),e.jsx("td",{children:e.jsx("code",{children:"number"})}),e.jsx("td",{children:"列表总高度"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"startIndex"}),e.jsx("td",{children:e.jsx("code",{children:"number"})}),e.jsx("td",{children:"可见区域起始索引（含缓冲区）"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"endIndex"}),e.jsx("td",{children:e.jsx("code",{children:"number"})}),e.jsx("td",{children:"可见区域结束索引（含缓冲区）"})]})]})]}),`
`,e.jsx(n.h2,{id:"具体实现原理",children:"具体实现原理"}),`
`,e.jsx(n.h3,{id:"文件职责",children:"文件职责"}),`
`,e.jsxs(n.p,{children:[`| 文件 | 职责 |
|------|------|
| `,e.jsx(n.code,{children:"index.ts"})," | ",e.jsx(n.strong,{children:"入口文件"}),"。负责参数校验、创建 ",e.jsx(n.code,{children:"measurements"})," 高度缓存 Map，将各 core 模块组装为 ",e.jsx(n.code,{children:"VirtualListInstance"}),` 实例返回 |
| `,e.jsx(n.code,{children:"interface.ts"})," | ",e.jsx(n.strong,{children:"类型定义"}),`。定义所有 TypeScript 接口：配置项、测量信息、计算结果、虚拟项、实例方法 |
| `,e.jsx(n.code,{children:"core/getItemHeight.ts"})," | ",e.jsx(n.strong,{children:"获取项高度"}),"。从 measurements 缓存中查找已测量的实际高度，未命中则返回预估高度 ",e.jsx(n.code,{children:"estimatedItemHeight"}),` |
| `,e.jsx(n.code,{children:"core/getItemOffset.ts"})," | ",e.jsx(n.strong,{children:"计算项偏移量"}),`。从第 0 项开始累加每项高度，得到目标项的顶部偏移位置（top offset） |
| `,e.jsx(n.code,{children:"core/getTotalHeight.ts"})," | ",e.jsx(n.strong,{children:"计算总高度"}),`。遍历所有项并累加高度，用于设置滚动容器的内容区总高度 |
| `,e.jsx(n.code,{children:"core/findStartIndex.ts"})," | ",e.jsx(n.strong,{children:"二分查找起始索引"}),`。使用二分查找算法，根据 scrollTop 快速定位第一个在视口内的列表项索引，时间复杂度 O(log n) |
| `,e.jsx(n.code,{children:"core/calculateVisibleItems.ts"})," | ",e.jsx(n.strong,{children:"核心计算模块"}),`。组合调用 findStartIndex、getItemOffset、getItemHeight、getTotalHeight，计算出完整的可见项列表及元信息 |
| `,e.jsx(n.code,{children:"core/updateItemHeight.ts"})," | ",e.jsx(n.strong,{children:"更新项高度"}),`。将 DOM 实际测量的高度写入 measurements 缓存，包含索引、高度、偏移量 |
| `,e.jsx(n.code,{children:"core/getScrollTopForIndex.ts"})," | ",e.jsx(n.strong,{children:"索引定位"}),"。计算跳转到指定索引时需要的 scrollTop 值，本质是调用 getItemOffset |"]}),`
`,e.jsx(n.h3,{id:"核心流程",children:"核心流程"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"初始化"}),"：",e.jsx(n.code,{children:"createVirtualList"})," 接收配置，创建一个 ",e.jsx(n.code,{children:"Map<number, ItemMeasurement>"})," 作为高度缓存，闭包共享给所有方法"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"计算可见项"}),"：",e.jsx(n.code,{children:"calculateVisibleItems(scrollTop)"})," 先用二分查找定位起始索引，再向下累加高度直到超出视口，前后各扩展 overScan 个缓冲项"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"动态高度更新"}),"：渲染后通过 ",e.jsx(n.code,{children:"updateItemHeight"})," 将实际 DOM 高度写入缓存，下次计算时自动使用实际值"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"重新计算"}),"：数据源变化时调用 ",e.jsx(n.code,{children:"reset"})," 清空缓存，所有项恢复为预估高度"]}),`
`]}),`
`,e.jsx(n.h3,{id:"关键技术点",children:"关键技术点"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"二分查找"}),"：",e.jsx(n.code,{children:"findStartIndex"})," 对有序的偏移量序列进行二分搜索，避免从头遍历，在大数据量下性能优势明显"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"预估高度 + 实际高度混合策略"}),"：未测量的项使用预估值，已测量的项使用实际值，兼顾初始渲染速度和后续精确度"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"缓冲区（overScan）"}),"：在可见区域上下各多渲染若干项，平滑快速滚动时的视觉体验"]}),`
`]}),`
`,e.jsx(n.h3,{id:"数据流向",children:"数据流向"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`用户滚动 → scrollTop
  → calculateVisibleItems(scrollTop)
    → findStartIndex(scrollTop)          // 二分查找定位起始项
      → getItemOffset(mid) + getItemHeight(mid)  // 逐项计算偏移和高度
    → 向下累加高度 → 确定 endIndex       // 确定可见区域终点
    → 构建 visibleItems[]                // 组装每项的 data/index/offset/height
    → getTotalHeight()                   // 计算内容区总高
  → 返回 { visibleItems, totalHeight, startIndex, endIndex }

DOM 渲染后 → 测量实际高度
  → updateItemHeight(index, height)     // 写入 measurements 缓存
  → 下次滚动时 getItemHeight 返回实际值  // 自动使用缓存的真实高度
`})})]})}function p(t={}){const{wrapper:n}={...r(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(s,{...t})}):s(t)}export{p as default};
