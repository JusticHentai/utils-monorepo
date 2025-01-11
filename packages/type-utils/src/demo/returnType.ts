import MyReturnType from '../ReturnType'

const fn = (v: boolean) => {
  if (v) return 1
  else return 2
}

type a = MyReturnType<typeof fn> // 应推导出 "1 | 2"

const test: a = 1

console.log(test)
