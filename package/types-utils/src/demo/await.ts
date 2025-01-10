import Await from '../Await'

type t1 = Promise<string>
type t2 = Promise<string | number>
type t3 = Promise<Promise<string>>

const test1: Await<t1> = ''
const test2: Await<t2> = 0
const test3: Await<t3> = ''
// const test4: Await<string> = ''

console.log(test1, test2, test3)
