import If from '../If'

type t1 = false
type t2 = true

type t3 = string
type t4 = number

const test1: If<t1, t3, t4> = 0
const test2: If<t2, t3, t4> = ''

console.log(test1, test2)
