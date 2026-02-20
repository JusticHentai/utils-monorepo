import { action } from 'storybook/actions'
import type BaseFunction from '../../../packages/js-utils/src/BaseFunction'

const edgeCaseDemo = () => {
  // BaseFunction 是类型，不是值，用于类型约束
  const noArgs: BaseFunction<[], void> = () => {}
  noArgs()

  const identity: BaseFunction<[string], string> = (s) => s

  action('BaseFunction - 边界情况')({
    说明: '验证 BaseFunction 的边界类型约束',
    无参函数: '() => void 调用成功',
    恒等函数: identity('hello'),
  })
}

export default edgeCaseDemo
