import type { ElementInfo } from '../getElementInfo/interface'

/** 停止监听函数类型 */
export type StopListening = () => void

/** 行为回调函数类型 */
export type BehaviorCallback = (behavior: BehaviorInfo) => void

/**
 * 用户行为类型
 * - click: 点击行为
 * - scroll: 滚动行为
 * - input: 输入行为
 * - navigate: 路由导航
 * - custom: 自定义行为
 */
export enum BEHAVIOR_TYPE {
  /** 点击行为 */
  CLICK = 'click',
  /** 滚动行为 */
  SCROLL = 'scroll',
  /** 输入行为 */
  INPUT = 'input',
  /** 路由导航 */
  NAVIGATE = 'navigate',
  /** 自定义行为 */
  CUSTOM = 'custom',
}

/** 路由变化触发类型 */
export enum ROUTE_TRIGGER {
  /** History pushState */
  PUSH_STATE = 'pushState',
  /** History replaceState */
  REPLACE_STATE = 'replaceState',
  /** popstate 事件 */
  POPSTATE = 'popstate',
  /** hashchange 事件 */
  HASHCHANGE = 'hashchange',
}

/** 用户行为信息 */
export interface BehaviorInfo {
  /** 行为类型 */
  type: `${BEHAVIOR_TYPE}`
  /** 发生时间 */
  timestamp: number
  /** 页面 URL */
  pageUrl: string
  /** 元素信息 */
  target?: ElementInfo
  /** 额外数据 */
  data?: Record<string, unknown>
}

/** 点击监控配置 */
export interface ObserveClickOptions {
  /** 是否捕获阶段，默认 true */
  capture?: boolean
  /** 采样率（0-1），默认 1 */
  sampleRate?: number
}

/** 滚动监控配置 */
export interface ObserveScrollOptions {
  /** 节流间隔 (ms)，默认 200 */
  throttleMs?: number
  /** 采样率（0-1），默认 1 */
  sampleRate?: number
}

/** 输入监控配置 */
export interface ObserveInputOptions {
  /** 是否记录输入值（敏感数据可能需要关闭），默认 false */
  recordValue?: boolean
  /** 敏感字段（这些字段不记录值） */
  sensitiveFields?: string[]
  /** 节流间隔 (ms)，默认 500 */
  throttleMs?: number
}

/** 行为监控配置 */
export interface BehaviorMonitorOptions {
  /** 是否监控点击，默认 true */
  click?: boolean
  /** 是否监控滚动，默认 true */
  scroll?: boolean
  /** 是否监控输入，默认 true */
  input?: boolean
  /** 是否监控路由变化，默认 true */
  routeChange?: boolean
  /** 最大记录数，默认 100 */
  maxBehaviors?: number
  /** 点击监控配置 */
  clickOptions?: ObserveClickOptions
  /** 滚动监控配置 */
  scrollOptions?: ObserveScrollOptions
  /** 输入监控配置 */
  inputOptions?: ObserveInputOptions
}

/** 密码输入框类型 */
export const PASSWORD_INPUT_TYPE = 'password'

/** 默认敏感字段列表 */
export const DEFAULT_SENSITIVE_FIELDS = [
  'password',
  'pwd',
  'secret',
  'token',
  'credit',
  'card',
]

/** 默认最大行为记录数 */
export const DEFAULT_MAX_BEHAVIORS = 100
