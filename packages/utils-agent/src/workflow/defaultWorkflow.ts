import type { AgentRuntime } from '../runtime/AgentRuntime'
import type { AgentWorkflow } from './types'

export const createDefaultAgentWorkflow = (): AgentWorkflow => ({
  name: 'default-agent-workflow',
  entry: 'prepare',
  steps: [
    {
      name: 'prepare',
      run: async (state, runtime) => runtime.prepare(state),
    },
    {
      name: 'callModel',
      run: async (state, runtime) => runtime.callModel(state),
    },
    {
      name: 'handleTools',
      run: async (state, runtime) => runtime.handleTools(state),
    },
    {
      name: 'finalize',
      run: async (state, runtime) => runtime.finalize(state),
    },
  ],
})

export type { AgentRuntime }
