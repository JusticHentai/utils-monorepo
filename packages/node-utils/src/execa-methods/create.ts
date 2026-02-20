import isPlainObj from 'is-plain-obj'
import { normalizeParameters } from '@/execa-arguments/parameters'
import { isTemplateString, parseTemplates } from './template'
import { execaCoreSync } from './mainSync'
import { execaCoreAsync } from './mainAsync'
import { mergeOptions } from './bind'
import type {
  CommonOptions,
  SyncOptions,
  SyncResult,
  ResultPromise,
  TemplateExpression,
} from '@/execa-types'

type MapArgumentsFn = (args: {
  file: string
  commandArguments: string[]
  options: CommonOptions
}) => {
  file?: string
  commandArguments?: string[]
  options?: CommonOptions
  isSync?: boolean
}

type SetBoundExecaFn = (
  boundExeca: BoundExecaFn,
  createNested: CreateNestedFn,
  boundOptions: CommonOptions
) => void

type CreateNestedFn = (
  mapArguments: MapArgumentsFn,
  boundOptions: CommonOptions,
  setBoundExeca?: SetBoundExecaFn
) => BoundExecaFn

type BoundExecaFn = {
  (...args: unknown[]): ResultPromise | SyncResult | BoundExecaFn
  sync?: BoundExecaFn
  s?: BoundExecaFn
}

/**
 * 包装所有导出的方法以提供以下功能：
 * - 模板字符串语法：execa`command argument`
 * - 选项绑定：boundExeca = execa(options)
 * - 可选参数/选项：execa(file)、execa(file, args)、execa(file, options)、execa(file, args, options)
 *
 * mapArguments() 和 setBoundExeca() 允许方法特定的逻辑
 *
 * @param mapArguments - 参数映射函数
 * @param boundOptions - 绑定的选项
 * @param deepOptions - 深度选项
 * @param setBoundExeca - 设置绑定方法的函数
 */
export const createExeca = (
  mapArguments: MapArgumentsFn,
  boundOptions: CommonOptions = {},
  deepOptions: CommonOptions = {},
  setBoundExeca?: SetBoundExecaFn
): BoundExecaFn => {
  const createNested: CreateNestedFn = (mapArgs, boundOpts, setBound) =>
    createExeca(mapArgs, boundOpts, deepOptions, setBound)

  const boundExeca: BoundExecaFn = (...execaArguments: unknown[]) =>
    callBoundExeca(
      {
        mapArguments,
        deepOptions,
        boundOptions,
        setBoundExeca,
        createNested,
      },
      execaArguments
    )

  if (setBoundExeca !== undefined) {
    setBoundExeca(boundExeca, createNested, boundOptions)
  }

  return boundExeca
}

interface CallBoundExecaContext {
  mapArguments: MapArgumentsFn
  deepOptions: CommonOptions
  boundOptions: CommonOptions
  setBoundExeca?: SetBoundExecaFn
  createNested: CreateNestedFn
}

/**
 * 调用绑定的 execa
 */
const callBoundExeca = (
  {
    mapArguments,
    deepOptions,
    boundOptions,
    setBoundExeca,
    createNested,
  }: CallBoundExecaContext,
  execaArguments: unknown[]
): ResultPromise | SyncResult | BoundExecaFn => {
  const [firstArgument, ...nextArguments] = execaArguments

  // 如果第一个参数是普通对象，返回绑定了新选项的方法
  if (isPlainObj(firstArgument)) {
    return createNested(
      mapArguments,
      mergeOptions(boundOptions, firstArgument as CommonOptions),
      setBoundExeca
    )
  }

  const { file, commandArguments, options, isSync } = parseArguments({
    mapArguments,
    firstArgument,
    nextArguments,
    deepOptions,
    boundOptions,
  })

  return isSync
    ? execaCoreSync(file, commandArguments, options as SyncOptions)
    : execaCoreAsync(file, commandArguments, options, createNested)
}

interface ParseArgumentsContext {
  mapArguments: MapArgumentsFn
  firstArgument: unknown
  nextArguments: unknown[]
  deepOptions: CommonOptions
  boundOptions: CommonOptions
}

/**
 * 解析参数
 */
const parseArguments = ({
  mapArguments,
  firstArgument,
  nextArguments,
  deepOptions,
  boundOptions,
}: ParseArgumentsContext): {
  file: string
  commandArguments: string[]
  options: CommonOptions
  isSync: boolean
} => {
  // 检查是否使用模板字符串语法
  const callArguments = isTemplateString(firstArgument)
    ? parseTemplates(firstArgument as TemplateStringsArray, nextArguments as TemplateExpression[])
    : [firstArgument, ...nextArguments]

  // 根据参数数量确定类型
  const rawFile = callArguments[0] as string
  const rawArgs = callArguments.length > 1 && Array.isArray(callArguments[1]) 
    ? callArguments[1] as string[]
    : undefined
  const rawOpts = (callArguments.length > 2 
    ? callArguments[2] 
    : (callArguments.length > 1 && !Array.isArray(callArguments[1]) ? callArguments[1] : undefined)
  ) as CommonOptions | undefined

  const [initialFile, initialArguments, initialOptions] = normalizeParameters<CommonOptions>(
    rawFile,
    rawArgs ?? [],
    rawOpts ?? {}
  )

  const mergedOptions = mergeOptions(
    mergeOptions(deepOptions, boundOptions),
    initialOptions
  )

  const {
    file = initialFile,
    commandArguments = initialArguments,
    options = mergedOptions,
    isSync = false,
  } = mapArguments({
    file: initialFile,
    commandArguments: initialArguments,
    options: mergedOptions,
  })

  return {
    file,
    commandArguments,
    options,
    isSync,
  }
}
