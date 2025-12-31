import type { Meta, StoryObj } from '@storybook/react'
import NumSquaresDemo from './index'

const meta: Meta<typeof NumSquaresDemo> = {
  title: 'learn-utils/leetcode/numSquares',
  component: NumSquaresDemo,
}

export default meta
type Story = StoryObj<typeof NumSquaresDemo>

export const Demo: Story = {}
