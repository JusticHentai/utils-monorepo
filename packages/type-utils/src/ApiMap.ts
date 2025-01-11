import Exclude from './Exclude'

/**
 * 我的 apiMap 类型
 */
type ApiMap<Type extends { [key: string]: any }> = {
  [Key in keyof Type]-?: (params: Exclude<Type[Key], undefined>) => any
}

export default ApiMap
