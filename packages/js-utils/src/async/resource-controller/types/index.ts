export interface Resource {
  resolve: (...params: any[]) => void
  promise: Promise<any>
  current?: any
}

export type ResourceMap = Record<string, Resource>

export interface ResourceOptions {
  name: string
  loadFn: (...params: any[]) => Promise<any>
  priority?: number
}

export type LoadQueue = {
  priorityList: number[]
  loadList: ResourceOptions[][]
}
