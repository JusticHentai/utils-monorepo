import type { Meta, StoryObj } from '@storybook/react'
import FindDuplicateDemo from './index'

const meta: Meta<typeof FindDuplicateDemo> = {
  title: 'learn-utils/leetcode/findDuplicate',
  component: FindDuplicateDemo,
}

export default meta
type Story = StoryObj<typeof FindDuplicateDemo>

export const Demo: Story = {}
