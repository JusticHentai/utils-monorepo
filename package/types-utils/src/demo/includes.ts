import Includes from '../Includes'

type t1 = [string, number | boolean]
type t2 = boolean

const test1: Includes<t1, t2> = false

console.log(test1)
