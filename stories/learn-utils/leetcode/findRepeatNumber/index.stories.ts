import type { Meta, StoryObj } from '@storybook/react'
import FindRepeatNumberDemo from './index'

const meta: Meta<typeof FindRepeatNumberDemo> = {
  title: 'learn-utils/leetcode/findRepeatNumber',
  component: FindRepeatNumberDemo,
}

export default meta
type Story = StoryObj<typeof FindRepeatNumberDemo>

export const Demo: Story = {}
