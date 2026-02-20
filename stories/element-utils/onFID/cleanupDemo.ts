import { action } from 'storybook/actions'

export const createCleanupDemo = (
  getStopFn: () => (() => void) | null,
  clearStopFn: () => void
) => {
  return () => {
    const stopFn = getStopFn()
    if (stopFn) {
      stopFn()
      clearStopFn()
    }

    action('清理完成')()
  }
}
