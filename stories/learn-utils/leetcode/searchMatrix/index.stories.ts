import type { Meta, StoryObj } from '@storybook/react'
import SearchMatrixDemo from './index'

const meta: Meta<typeof SearchMatrixDemo> = {
  title: 'learn-utils/leetcode/searchMatrix',
  component: SearchMatrixDemo,
}

export default meta
type Story = StoryObj<typeof SearchMatrixDemo>

export const Demo: Story = {}
