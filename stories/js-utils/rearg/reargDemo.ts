import { action } from 'storybook/actions'
import rearg from '../../../packages/js-utils/src/rearg'

const reargDemo = () => {
  const fn = (...args: unknown[]) => [...args]

  // 基本重排 (lodash: rearg(fn, [2,0,1])('b','c','a') => ['a','b','c'])
  const rearged = rearg(fn, [2, 0, 1])
  action('rearg - [2,0,1] 重排')(rearged('b', 'c', 'a'))

  // 重复索引 (lodash: rearg(fn, [1,1,1])('c','a','b') => ['a','a','a'])
  const repeated = rearg(fn, [1, 1, 1])
  action('rearg - 重复索引[1,1,1]')(repeated('c', 'a', 'b'))

  // 不存在的索引返回 undefined (lodash: rearg(fn, [1,4])('b','a','c') => ['a',undefined,'c'])
  const nonExist = rearg(fn, [1, 4])
  action('rearg - 不存在的索引[1,4]')(nonExist('b', 'a', 'c'))

  // 索引少于参数时，多余参数被截断
  // (lodash: rearg(fn, [1,0])('b','a','c') => ['a','b','c'] — c作为额外参数)
  const fewer = rearg(fn, [1, 0])
  action('rearg - 索引少于参数')(fewer('b', 'a', 'c'))

  // 双重rearg (lodash: rearg(rearg(fn,[2,1,0]),[1,0,2])('b','c','a') => ['a','b','c'])
  const r1 = rearg(fn, [2, 1, 0])
  const r2 = rearg(r1, [1, 0, 2])
  action('rearg - 双重rearg')(r2('b', 'c', 'a'))
}

export default reargDemo