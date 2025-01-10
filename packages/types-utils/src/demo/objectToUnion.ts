import ObjectToUnion from '../ObjectToUnion'

const list = {
  test1: '',
  test2: 1,
  1: '',
}

type Test1 = ObjectToUnion<typeof list>

const test1: Test1 = 'test1'

console.log(test1)
