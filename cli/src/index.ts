#! /usr/bin/env node

import i from '@/commands/i'
import u from '@/commands/u'
import { Command } from 'commander'
import md from './commands/md'
import p from './commands/p'

const program = new Command()

program.version('1.0.0').description('utils-monorepo 脚手架')

program.command('u [message]').description('git 更新三连').action(u)

program
  .command('i <name>')
  .description('利用 utils-template 在 packages 内新建名字为 name 的新工具')
  .action(i)

program
  .command('md [obsidianPath]')
  .description('同步 Obsidian 文档到 README.md')
  .action(md)

program.command('p [version]').description('发布到 npm').action(p)

program.parse(process.argv)
