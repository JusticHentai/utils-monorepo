export default class MinStack {
  x_stack: number[] = []
  min_stack: number[] = [Infinity]

  constructor() {}

  push(val: number): void {
    this.x_stack.push(val)
    this.min_stack.push(
      Math.min(this.min_stack[this.min_stack.length - 1], val)
    )
  }

  pop(): void {
    this.x_stack.pop()
    this.min_stack.pop()
  }

  top(): number {
    return this.x_stack[this.x_stack.length - 1]
  }

  getMin(): number {
    return this.min_stack[this.min_stack.length - 1]
  }
}
