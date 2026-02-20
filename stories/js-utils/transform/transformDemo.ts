import { action } from 'storybook/actions'
import transform from '../../../packages/js-utils/src/transform'

const transformDemo = () => {
  // 数组：平方值
  const squared = transform([1, 2, 3], (result: number[], value: unknown) => {
    result.push((value as number) * (value as number))
  }, [] as number[])
  action('transform - 数组平方')(squared)

  // 对象：键值反转
  const inverted = transform(
    { a: 1, b: 2, c: 1 } as Record<string, unknown>,
    (result: Record<string, string[]>, value: unknown, key: string | number) => {
      const k = String(value)
      ;(result[k] || (result[k] = [])).push(String(key))
    },
    {} as Record<string, string[]>,
  )
  action('transform - 对象键值分组')(inverted)

  // 提前终止：return false
  const earlyStop: number[] = []
  transform([1, 2, 3, 4, 5] as unknown[], (result: number[], value: unknown) => {
    result.push(value as number)
    if ((value as number) === 3) return false
  }, earlyStop)
  action('transform - return false 提前终止')(earlyStop)

  // 累积器为引用同一对象
  const acc: number[] = []
  const returned = transform([1, 2, 3] as unknown[], (result: number[], value: unknown) => {
    result.push(value as number)
  }, acc)
  action('transform - 返回的是同一累积器引用')(returned === acc)

  // null 对象返回初始累积器
  const emptyResult = transform(null as any, (r: any) => { r.x = 1 }, {} as Record<string, unknown>)
  action('transform - null 对象返回初始累积器')(emptyResult)
}

export default transformDemo
