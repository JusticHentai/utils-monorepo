import isFunction from '@justichentai/js-utils/isFunction'

import type { KeyFilter, KeyPredicate } from '../interface'
import { genFilterKey, isValidKeyType } from './genFilterKey'

/** 键盘输入预处理方法 */
const genKeyFormatter = (
  keyFilter: KeyFilter,
  exactMatch: boolean
): KeyPredicate => {
  if (isFunction(keyFilter)) return keyFilter

  if (isValidKeyType(keyFilter)) {
    return (event: KeyboardEvent) => genFilterKey(event, keyFilter, exactMatch)
  }

  if (Array.isArray(keyFilter)) {
    return (event: KeyboardEvent) =>
      keyFilter.find((item) => genFilterKey(event, item, exactMatch))
  }

  return () => Boolean(keyFilter)
}

export default genKeyFormatter
