import React, { ReactNode } from 'react'
import { TreeDataType } from './interface'

export type Key2NodePropsType = { [key: string]: TreeDataType }

export const getTreeDataFromTreeChildren = (treeChildren: ReactNode) => {
  const loop = (children: ReactNode): TreeDataType[] | undefined => {
    return React.Children.map(children, (child) => {
      if (!React.isValidElement(child)) return undefined
      const childProps = child.props as Record<string, any>
      return {
        ...childProps,
        key: child.key as string,
        children: loop(childProps.children),
      } as TreeDataType
    })?.filter(Boolean)
  }
  return loop(treeChildren)
}

export function getChildNodeKeys(
  node: TreeDataType,
  key2nodeProps: Key2NodePropsType
): Set<string> {
  const nodes = new Set<string>()
  const loop = (children: TreeDataType[]) => {
    children.forEach((child) => {
      const key = child.key!
      const item = key2nodeProps[key]
      if (
        !item ||
        item.disabled ||
        item.disableCheckbox ||
        item.checkable === false
      )
        return
      nodes.add(key)
      loop(item.children || [])
    })
  }
  if (node) loop(node.children || [])
  return nodes
}

const updateParent = (
  key: string,
  key2nodeProps: Key2NodePropsType,
  allKeys: Set<string>,
  indeterminateKeysSet: Set<string>
) => {
  const pathParentKeys = [...(key2nodeProps[key]?.pathParentKeys || [])]
  pathParentKeys.reverse().some((itemKey) => {
    const parent = key2nodeProps[itemKey]
    if (
      parent &&
      !parent.disabled &&
      !parent.disableCheckbox &&
      parent.checkable !== false
    ) {
      let total = 0
      let number = 0
      ;(parent.children || []).some((child: any) => {
        const k = child.key! as string
        const item = key2nodeProps[k]
        if (
          !item ||
          item.disabled ||
          item.disableCheckbox ||
          item.checkable === false
        )
          return false
        total++
        if (allKeys.has(k)) {
          number++
        } else if (indeterminateKeysSet.has(k)) {
          number += 0.5
          return true
        }
        return false
      })
      if (!number || number === total) {
        indeterminateKeysSet.delete(itemKey)
      } else {
        indeterminateKeysSet.add(itemKey)
      }
      if (number && number === total) {
        allKeys.add(itemKey)
      } else {
        allKeys.delete(itemKey)
      }
      return false
    }
    return true
  })
}

export function getCheckedKeysByInitKeys(
  checkedKeys: string[],
  key2nodeProps: Key2NodePropsType
): { checkedKeys: string[]; indeterminateKeys: string[] } {
  const checkedKeysSet = new Set<string>(checkedKeys || [])
  const indeterminateKeysSet = new Set<string>()
  const childCheckedKeysSet = new Set<string>()

  checkedKeys.forEach((key) => {
    if (!childCheckedKeysSet.has(key)) {
      const childKeys = getChildNodeKeys(key2nodeProps[key], key2nodeProps)
      childKeys.forEach((v) => childCheckedKeysSet.add(v))
    }
    if (
      key2nodeProps[key] &&
      !(key2nodeProps[key].pathParentKeys || []).some((_key) =>
        checkedKeysSet.has(_key)
      )
    ) {
      updateParent(key, key2nodeProps, checkedKeysSet, indeterminateKeysSet)
    }
  })

  return {
    checkedKeys: [...new Set([...checkedKeysSet, ...childCheckedKeysSet])],
    indeterminateKeys: [...indeterminateKeysSet],
  }
}

export function getAllCheckedKeysByCheck(
  key: string,
  checked: boolean,
  checkedKeys: string[],
  key2nodeProps: Key2NodePropsType,
  indeterminateKeys: string[]
): { checkedKeys: string[]; indeterminateKeys: string[] } {
  if (!key2nodeProps[key]) {
    return { checkedKeys, indeterminateKeys }
  }
  const checkedKeysSet = new Set(checkedKeys)
  const indeterminateKeysSet = new Set(indeterminateKeys)
  const childKeys = getChildNodeKeys(key2nodeProps[key], key2nodeProps)

  if (checked) {
    checkedKeysSet.add(key)
    indeterminateKeysSet.delete(key)
    childKeys.forEach((v) => checkedKeysSet.add(v))
  } else {
    indeterminateKeysSet.delete(key)
    checkedKeysSet.delete(key)
    childKeys.forEach((v) => checkedKeysSet.delete(v))
  }

  updateParent(key, key2nodeProps, checkedKeysSet, indeterminateKeysSet)

  return {
    checkedKeys: [...checkedKeysSet],
    indeterminateKeys: [...indeterminateKeysSet],
  }
}
