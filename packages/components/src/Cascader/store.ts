import {
  CascaderNodeType,
  CascaderOptionType,
  FieldNamesType,
} from './interface'

const defaultFieldNames: Required<FieldNamesType> = {
  label: 'label',
  value: 'value',
  children: 'children',
  disabled: 'disabled',
  isLeaf: 'isLeaf',
}

function createNode(
  option: CascaderOptionType,
  parent: CascaderNodeType | null,
  level: number,
  fieldNames: Required<FieldNamesType>
): CascaderNodeType {
  const value = String(option[fieldNames.value] ?? '')
  const label = (option[fieldNames.label] ?? value) as React.ReactNode
  const disabled = !!(option[fieldNames.disabled] ?? parent?.disabled)
  const disableCheckbox = !!option.disableCheckbox
  const isLeaf =
    option[fieldNames.isLeaf] !== undefined
      ? !!option[fieldNames.isLeaf]
      : !option[fieldNames.children] ||
        (option[fieldNames.children] as unknown[])?.length === 0
  const pathValue = parent ? [...parent.pathValue, value] : [value]
  const pathLabel = parent ? [...parent.pathLabel, label] : [label]

  return {
    value,
    label,
    disabled,
    disableCheckbox,
    isLeaf,
    loading: false,
    loaded: false,
    checked: false,
    halfChecked: false,
    children: [],
    parent,
    level,
    pathValue,
    pathLabel,
    _data: option,
  }
}

export class CascaderStore {
  nodes: CascaderNodeType[] = []
  flatNodes: CascaderNodeType[] = []
  nodeMap: Map<string, CascaderNodeType> = new Map()
  fieldNames: Required<FieldNamesType>
  changeOnSelect: boolean

  constructor(
    options: CascaderOptionType[],
    fieldNames?: FieldNamesType,
    changeOnSelect?: boolean
  ) {
    this.fieldNames = { ...defaultFieldNames, ...fieldNames }
    this.changeOnSelect = !!changeOnSelect
    this.nodes = this._buildTree(options, null, 0)
    this._flattenNodes(this.nodes)
  }

  private _buildTree(
    options: CascaderOptionType[],
    parent: CascaderNodeType | null,
    level: number
  ): CascaderNodeType[] {
    return (options || []).map((option) => {
      const node = createNode(option, parent, level, this.fieldNames)
      const childrenData = option[this.fieldNames.children] as
        | CascaderOptionType[]
        | undefined
      if (childrenData && childrenData.length > 0) {
        node.children = this._buildTree(childrenData, node, level + 1)
        node.isLeaf = false
      }
      this.nodeMap.set(node.pathValue.join('/'), node)
      return node
    })
  }

  private _flattenNodes(nodes: CascaderNodeType[]) {
    nodes.forEach((node) => {
      this.flatNodes.push(node)
      if (node.children.length) {
        this._flattenNodes(node.children)
      }
    })
  }

  findNodeByPathValue(pathValue: string[]): CascaderNodeType | undefined {
    return this.nodeMap.get(pathValue.join('/'))
  }

  getSelectableNodes(): CascaderNodeType[] {
    if (this.changeOnSelect) {
      return this.flatNodes.filter((n) => !n.disabled)
    }
    return this.flatNodes.filter((n) => n.isLeaf && !n.disabled)
  }

  /** 设置多选选中状态 */
  setCheckedByValue(values: string[][]): void {
    // 先清空
    this.flatNodes.forEach((node) => {
      node.checked = false
      node.halfChecked = false
    })
    // 设置选中
    values.forEach((pathValue) => {
      const node = this.findNodeByPathValue(pathValue)
      if (node) {
        this._setCheckedState(node, true)
      }
    })
    // 更新父节点
    this._updateParents()
  }

  private _setCheckedState(node: CascaderNodeType, checked: boolean) {
    if (node.disabled || node.disableCheckbox) return
    node.checked = checked
    node.halfChecked = false
    // 递归子节点
    node.children.forEach((child) => {
      this._setCheckedState(child, checked)
    })
  }

  private _updateParents() {
    // 从叶子向上遍历
    const reversedFlat = [...this.flatNodes].reverse()
    reversedFlat.forEach((node) => {
      if (node.children.length > 0) {
        const checkableChildren = node.children.filter(
          (c) => !c.disabled && !c.disableCheckbox
        )
        if (checkableChildren.length === 0) return
        const allChecked = checkableChildren.every((c) => c.checked)
        const someChecked = checkableChildren.some(
          (c) => c.checked || c.halfChecked
        )
        node.checked = allChecked
        node.halfChecked = !allChecked && someChecked
      }
    })
  }

  /** 切换某节点的勾选 */
  toggleCheck(pathValue: string[]): {
    checkedPaths: string[][]
    halfCheckedPaths: string[][]
  } {
    const node = this.findNodeByPathValue(pathValue)
    if (!node || node.disabled || node.disableCheckbox) {
      return this._getCheckedPaths()
    }
    const newState = !node.checked
    this._setCheckedState(node, newState)
    this._updateParents()
    return this._getCheckedPaths()
  }

  private _getCheckedPaths(): {
    checkedPaths: string[][]
    halfCheckedPaths: string[][]
  } {
    const checkedPaths: string[][] = []
    const halfCheckedPaths: string[][] = []
    this.flatNodes.forEach((node) => {
      if (node.checked) checkedPaths.push(node.pathValue)
      if (node.halfChecked) halfCheckedPaths.push(node.pathValue)
    })
    return { checkedPaths, halfCheckedPaths }
  }

  getCheckedNodes(): CascaderNodeType[] {
    return this.flatNodes.filter((n) => n.checked)
  }

  getCheckedLeafNodes(): CascaderNodeType[] {
    return this.flatNodes.filter((n) => n.checked && n.isLeaf)
  }

  getCheckedParentNodes(): CascaderNodeType[] {
    return this.flatNodes
      .filter((n) => n.checked)
      .filter((n) => {
        return !n.parent || !n.parent.checked
      })
  }

  /** 搜索匹配 */
  searchByLabel(keyword: string): CascaderNodeType[] {
    if (!keyword) return []
    const lower = keyword.toLowerCase()
    return this.flatNodes.filter((node) => {
      if (!node.isLeaf && !this.changeOnSelect) return false
      return node.pathLabel.some((label) => {
        return typeof label === 'string' && label.toLowerCase().includes(lower)
      })
    })
  }

  /** 追加子节点（动态加载） */
  appendChildren(pathValue: string[], children: CascaderOptionType[]): void {
    const node = this.findNodeByPathValue(pathValue)
    if (!node) return
    node.children = this._buildTree(children, node, node.level + 1)
    node.isLeaf = children.length === 0
    node.loaded = true
    node.loading = false
    // 重建 flatNodes
    this.flatNodes = []
    this._flattenNodes(this.nodes)
  }
}
