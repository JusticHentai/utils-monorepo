import type { Meta, StoryObj } from '@storybook/react'
import CountBitsDemo from './index'

const meta: Meta<typeof CountBitsDemo> = {
  title: 'learn-utils/leetcode/countBits',
  component: CountBitsDemo,
}

export default meta
type Story = StoryObj<typeof CountBitsDemo>

export const Demo: Story = {}
