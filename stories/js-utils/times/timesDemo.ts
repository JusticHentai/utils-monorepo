import { action } from 'storybook/actions'
import times from '../../../packages/js-utils/src/times'

const timesDemo = () => {
  // 基础：生成索引序列
  action('times - 索引序列')(times(5, (i) => i))

  // 结果翻倍
  action('times - 翻倍 doubled')(times(3, (i) => i * 2))

  // 常量填充
  action('times - 常量填充')(times(4, () => 'x'))

  // 生成对象数据
  action('times - 生成对象数据')(times(3, (i) => ({ id: i, name: 'item_' + i })))

  // n < 1 返回空数组
  action('times - n=0 返回空数组')(times(0, (i) => i))
  action('times - n=-1 返回空数组')(times(-1, (i) => i))

  // 小数 n 会截断为整数（源码 n < 1 检查，循环 i < n）
  action('times - n=2.6 执行2次')(times(2.6, (i) => i))

  // 传入 String 作为迭代器
  action('times - String 迭代器')(times(3, String))
}

export default timesDemo
