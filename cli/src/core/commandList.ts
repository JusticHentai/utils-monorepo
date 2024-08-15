import i from '@/core/commands/i'
import p from '@/core/commands/p'
import test from '@/core/commands/test'
import u from '@/core/commands/u'
import upgrade from '@/core/commands/upgrade'
import { CommandOptions } from '@/core/types'

const commandList: CommandOptions[] = [u, i, p, test, upgrade]

export default commandList
