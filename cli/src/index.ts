#! /usr/bin/env node

import { Command } from 'commander'
import gui from './commands/gui'
import { COMMAND_CONFIG } from './constants'

const init = () => {
  const program = new Command()

  program.version('1.0.0').description('utils-monorepo 脚手架')

  program.command('gui').description('操作面板').action(gui)

  for (const { command, description, action } of COMMAND_CONFIG) {
    program.command(command).description(description).action(action)
  }

  program.parse(process.argv)
}

init()
