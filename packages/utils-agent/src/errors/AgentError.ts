export class AgentError extends Error {
  readonly code: string
  readonly cause?: unknown

  constructor(message: string, options: { code: string; cause?: unknown }) {
    super(message)
    this.name = new.target.name
    this.code = options.code
    this.cause = options.cause
  }
}

export class AgentPolicyError extends AgentError {
  constructor(message: string, cause?: unknown) {
    super(message, { code: 'AGENT_POLICY_ERROR', cause })
  }
}

export class AgentProviderError extends AgentError {
  constructor(message: string, cause?: unknown) {
    super(message, { code: 'AGENT_PROVIDER_ERROR', cause })
  }
}

export class AgentToolError extends AgentError {
  constructor(message: string, cause?: unknown) {
    super(message, { code: 'AGENT_TOOL_ERROR', cause })
  }
}
