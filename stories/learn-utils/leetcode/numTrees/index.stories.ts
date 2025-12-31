import type { Meta, StoryObj } from '@storybook/react'
import NumTreesDemo from './index'

const meta: Meta<typeof NumTreesDemo> = {
  title: 'learn-utils/leetcode/numTrees',
  component: NumTreesDemo,
}

export default meta
type Story = StoryObj<typeof NumTreesDemo>

export const Demo: Story = {}
