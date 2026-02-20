import type { RefObject } from 'react'

/** 目标元素值类型，可为 undefined 或 null */
export type TargetValue<T> = T | undefined | null

/** 支持的 DOM 目标类型 */
export type TargetType = HTMLElement | Element | Window | Document

/**
 * 基础目标类型
 *
 * 支持以下形式：
 * - 函数：返回目标元素的函数，适用于延迟获取场景
 * - 直接值：目标元素本身、undefined 或 null
 * - Ref 对象：React 的 RefObject
 */
export type BasicTarget<T extends TargetType = Element> =
  | (() => TargetValue<T>)
  | TargetValue<T>
  | RefObject<TargetValue<T>>
