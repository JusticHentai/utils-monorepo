import DeepReadonly from '../DeepReadonly'
import Equal from '../Equal'

type X = {
  x: {
    a: 1
    b: 'hi'
  }
  y: 'hey'
}

type Expected = {
  readonly x: {
    readonly a: 1
    readonly b: 'hi'
  }
  readonly y: 'hey'
}

type Todo = DeepReadonly<X> // should be same as `Expected`

type t1 = Equal<Expected, Todo>

const test1: t1 = true

console.log(test1)
