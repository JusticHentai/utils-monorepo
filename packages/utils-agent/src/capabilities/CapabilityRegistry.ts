import type {
  AgentCapability,
  AgentCapabilityDescriptor,
  AgentCapabilityRegistry,
} from '../types'

export const createCapabilityRegistry = (
  initialCapabilities: AgentCapability[] = [],
): AgentCapabilityRegistry => {
  const capabilities = new Map<string, AgentCapability>()

  const registry: AgentCapabilityRegistry = {
    add(capability) {
      capabilities.set(capability.name, capability)
      return registry
    },

    get(name) {
      return capabilities.get(name)
    },

    list() {
      return Array.from(capabilities.values())
    },

    descriptors(): AgentCapabilityDescriptor[] {
      return registry.list().map((capability) => ({
        name: capability.name,
        description: capability.description,
        parameters: capability.parameters,
      }))
    },
  }

  for (const capability of initialCapabilities) {
    registry.add(capability)
  }

  return registry
}
