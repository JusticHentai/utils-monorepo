import { AgentError } from '../errors/AgentError'
import type { AgentWorkflow, AgentWorkflowState } from '../workflow/types'
import type { AgentRuntime } from './AgentRuntime'

export const executeWorkflow = async (
  workflow: AgentWorkflow,
  state: AgentWorkflowState,
  runtime: AgentRuntime,
): Promise<AgentWorkflowState> => {
  const stepIndexByName = new Map(workflow.steps.map((step, index) => [step.name, index]))
  let currentIndex = stepIndexByName.get(workflow.entry)

  if (currentIndex === undefined) {
    throw new AgentError(`Workflow entry step not found: ${workflow.entry}`, {
      code: 'AGENT_WORKFLOW_ERROR',
    })
  }

  let hopCount = 0

  while (currentIndex !== undefined) {
    const step = workflow.steps[currentIndex]

    if (!step) {
      throw new AgentError(`Workflow step not found at index: ${currentIndex}`, {
        code: 'AGENT_WORKFLOW_ERROR',
      })
    }

    const result = await step.run(state, runtime)

    if (result?.state) {
      Object.assign(state, result.state)
    }

    if (state.output || result?.stop) {
      break
    }

    if (result?.next) {
      const nextIndex = stepIndexByName.get(result.next)

      if (nextIndex === undefined) {
        throw new AgentError(`Workflow next step not found: ${result.next}`, {
          code: 'AGENT_WORKFLOW_ERROR',
        })
      }

      currentIndex = nextIndex
    } else {
      currentIndex += 1
    }

    hopCount += 1

    if (hopCount >= runtime.getMaxWorkflowSteps()) {
      throw new AgentError(
        `Workflow exceeded max steps: ${runtime.getMaxWorkflowSteps()}.`,
        {
          code: 'AGENT_WORKFLOW_ERROR',
        },
      )
    }
  }

  return state
}
