import Concat from '../Concat'

type t1 = [string, string]
type t2 = [number, string]

const test: Concat<t1, t2> = ['', '', 0, '']

console.log(test)
