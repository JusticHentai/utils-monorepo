import type { Meta, StoryObj } from '@storybook/react'
import LongestConsecutiveDemo from './index'

const meta: Meta<typeof LongestConsecutiveDemo> = {
  title: 'learn-utils/leetcode/longestConsecutive',
  component: LongestConsecutiveDemo,
}

export default meta
type Story = StoryObj<typeof LongestConsecutiveDemo>

export const Demo: Story = {}
