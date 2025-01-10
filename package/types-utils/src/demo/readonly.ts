import Readonly from '../Readonly'

interface Todo {
  title: string
  description: string
}

const todo: Readonly<Todo> = {
  title: 'Hey',
  description: 'foobar',
}

// todo.title = 'Hello' // Error: cannot reassign a readonly property
// todo.description = 'barFoo' // Error: cannot reassign a readonly property

console.log(todo)

const todo2: Readonly<Todo, 'title'> = {
  title: 'Hey',
  description: 'foobar',
}

// todo2.title = 'Hello' // Error: cannot reassign a readonly property
todo2.description = 'barFoo' // Error: cannot reassign a readonly property

console.log(todo2)
