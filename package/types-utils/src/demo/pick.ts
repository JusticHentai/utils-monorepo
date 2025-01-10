import Pick from '../Pick'

interface Todo {
  title?: string
  description: string
  completed: boolean
}

type TodoPreview = Pick<Todo, 'title' | 'completed'>

const todo: TodoPreview = {
  completed: false,
}

console.log(todo)
