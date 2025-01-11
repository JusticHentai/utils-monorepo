import Push from '../Push'

type t1 = [string, number]
type t2 = boolean

const test: Push<t1, t2> = ['', 0, true]

console.log(test)
