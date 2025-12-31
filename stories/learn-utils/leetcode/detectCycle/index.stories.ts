import type { Meta, StoryObj } from '@storybook/react'
import DetectCycleDemo from './index'

const meta: Meta<typeof DetectCycleDemo> = {
  title: 'learn-utils/leetcode/detectCycle',
  component: DetectCycleDemo,
}

export default meta
type Story = StoryObj<typeof DetectCycleDemo>

export const Demo: Story = {}
