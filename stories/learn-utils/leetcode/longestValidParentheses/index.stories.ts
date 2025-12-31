import type { Meta, StoryObj } from '@storybook/react'
import LongestValidParenthesesDemo from './index'

const meta: Meta<typeof LongestValidParenthesesDemo> = {
  title: 'learn-utils/leetcode/longestValidParentheses',
  component: LongestValidParenthesesDemo,
}

export default meta
type Story = StoryObj<typeof LongestValidParenthesesDemo>

export const Demo: Story = {}
