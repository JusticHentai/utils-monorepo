import MyExclude from '../Exclude'

type test1 = 'a' | 'b' | 'c'
type test2 = 'a' | 'b' | 'd' | 'e'

type test3 = MyExclude<test1, test2>

const test3: test3 = 'c'
// const test4: test3 = 'd' // TS2322: Type '"d"' is not assignable to type '"c"'.

console.log(test3)
