const parseCommand = (
  command: string
): {
  required: string[]
  optional: string[]
} => {
  const requiredReg = /<([^>]+)>/g
  let requiredMatch
  const required = []

  while ((requiredMatch = requiredReg.exec(command)) !== null) {
    required.push(requiredMatch[1])
  }

  const optionalReg = /\[([^\]]+)\]/g
  let optionalMatch
  const optional = []

  while ((optionalMatch = optionalReg.exec(command)) !== null) {
    optional.push(optionalMatch[1])
  }

  return {
    required,
    optional,
  }
}

export default parseCommand
