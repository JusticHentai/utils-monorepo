import Expand from '../Expand'

type A = {
  nihao: Nihao
  hi: Hi
}

type Hi = {
  Hello: Nihao
}

type Nihao = {
  baba: string[] | any
  hihi: Hello
}

type Hello = {
  fuck: string
}

type B = Expand<A>

const test1: B = {
  nihao: { baba: 'any', hihi: { fuck: 'string' } },
  hi: { Hello: { baba: 'any', hihi: { fuck: 'string' } } },
}

console.log(test1)
