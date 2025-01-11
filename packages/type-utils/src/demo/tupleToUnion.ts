import TupleToUnion from '../TupleToUnion'

type Arr = ['1', '2', '3']

type Test = TupleToUnion<Arr> // expected to be '1' | '2' | '3'

const test1: Test = '1'

console.log(test1)
