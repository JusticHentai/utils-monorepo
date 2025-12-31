import type { Meta, StoryObj } from '@storybook/react'
import HammingDistanceDemo from './index'

const meta: Meta<typeof HammingDistanceDemo> = {
  title: 'learn-utils/leetcode/hammingDistance',
  component: HammingDistanceDemo,
}

export default meta
type Story = StoryObj<typeof HammingDistanceDemo>

export const Demo: Story = {}
