import type { DependencyList, EffectCallback, useEffect, useLayoutEffect } from 'react'
import { useRef } from 'react'

import useUnmount from '../useUnmount'
import { depsAreSame } from '../depsAreSame'
import type { BasicTarget } from '../domTarget'
import { getTargetElement } from '../domTarget'

/**
 * 创建一个支持目标元素的 effect hook 工厂函数
 * 当目标元素变化时也会重新执行 effect
 * @param useEffectType - useEffect 或 useLayoutEffect
 * @returns 自定义的 effect hook
 *
 * @example
 * ```tsx
 * const useEffectWithTarget = createEffectWithTarget(useEffect)
 *
 * useEffectWithTarget(
 *   () => {
 *     console.log('effect run')
 *   },
 *   [dep1, dep2],
 *   targetRef
 * )
 * ```
 */
export const createEffectWithTarget = (
  useEffectType: typeof useEffect | typeof useLayoutEffect
) => {
  /**
   * @param effect - effect 回调
   * @param deps - 依赖数组
   * @param target - 目标元素，应该比较 ref.current vs ref.current, dom vs dom, ()=>dom vs ()=>dom
   */
  const useEffectWithTarget = (
    effect: EffectCallback,
    deps: DependencyList,
    target: BasicTarget<any> | BasicTarget<any>[]
  ) => {
    const hasInitRef = useRef(false);

    const lastElementRef = useRef<(Element | null)[]>([]);
    const lastDepsRef = useRef<DependencyList>([]);

    const unLoadRef = useRef<any>(undefined);

    useEffectType(() => {
      const targets = Array.isArray(target) ? target : [target];
      const els = targets.map((item) => getTargetElement(item));

      // 初始化运行
      if (!hasInitRef.current) {
        hasInitRef.current = true;
        lastElementRef.current = els;
        lastDepsRef.current = deps;

        unLoadRef.current = effect();
        return;
      }

      if (
        els.length !== lastElementRef.current.length ||
        !depsAreSame(lastElementRef.current, els) ||
        !depsAreSame(lastDepsRef.current, deps)
      ) {
        unLoadRef.current?.();

        lastElementRef.current = els;
        lastDepsRef.current = deps;
        unLoadRef.current = effect();
      }
    });

    useUnmount(() => {
      unLoadRef.current?.();
      // 用于 react-refresh
      hasInitRef.current = false;
    });
  };

  return useEffectWithTarget;
};
