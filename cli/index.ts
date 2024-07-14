#! /usr/bin/env node

import clear from 'clear'
import registerCommand from './src/commands'

const init = () => {
  clear()
  registerCommand()
}

init()
