#! /usr/bin/env node

import i from '@/commands/i'
import u from '@/commands/u'

import { Command } from 'commander'
const program = new Command()

program.version('1.0.0').description('JusticHentai CLI 工具')

program.command('u [message]').description('git 更新').action(u)

program.command('i <name>').description('安装工具模板').action(i)

program.parse(process.argv)
