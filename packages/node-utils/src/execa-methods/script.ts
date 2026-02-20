import type { CommonOptions, SetBoundExecaFn, MapArgumentsFn } from '@/execa-types'

/**
 * $ 脚本方法的映射函数（异步）
 */
export const mapScriptAsync: MapArgumentsFn = ({
  options,
}) => ({
  options: {
    ...options,
    stdin: options.stdin ?? 'inherit',
    preferLocal: options.preferLocal ?? true,
  },
})

/**
 * $ 脚本方法的深度选项
 */
export const deepScriptOptions: CommonOptions = {
  stdin: 'inherit',
  preferLocal: true,
}

/**
 * 设置 $.sync 方法
 */
export const setScriptSync: SetBoundExecaFn = (
  boundExeca,
  createNested,
  boundOptions
): void => {
  boundExeca.sync = createNested(mapScriptSync, boundOptions)
  boundExeca.s = boundExeca.sync
}

/**
 * $ 脚本方法的映射函数（同步）
 */
const mapScriptSync: MapArgumentsFn = ({
  options,
}) => ({
  options: {
    ...options,
    stdin: options.stdin ?? 'inherit',
    preferLocal: options.preferLocal ?? true,
  },
  isSync: true,
})
