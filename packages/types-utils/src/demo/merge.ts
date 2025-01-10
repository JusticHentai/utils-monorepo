import Merge from '../Merge'

interface t1 {
  hi?: number
  nihao?: string
  hello: boolean
}

interface t2 {
  hi: number
}

type t3 = Merge<t1, t2>

const test: t3 = {
  hi: 0,
  hello: true,
}

console.log(test)
