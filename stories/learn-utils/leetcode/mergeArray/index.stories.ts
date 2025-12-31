import type { Meta, StoryObj } from '@storybook/react'
import MergeArrayDemo from './index'

const meta: Meta<typeof MergeArrayDemo> = {
  title: 'learn-utils/leetcode/mergeArray',
  component: MergeArrayDemo,
}

export default meta
type Story = StoryObj<typeof MergeArrayDemo>

export const Demo: Story = {}
