import type { Meta, StoryObj } from '@storybook/react'
import IsPalindromeDemo from './index'

const meta: Meta<typeof IsPalindromeDemo> = {
  title: 'learn-utils/leetcode/isPalindrome',
  component: IsPalindromeDemo,
}

export default meta
type Story = StoryObj<typeof IsPalindromeDemo>

export const Demo: Story = {}
