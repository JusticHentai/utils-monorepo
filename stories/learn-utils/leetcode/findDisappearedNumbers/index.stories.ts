import type { Meta, StoryObj } from '@storybook/react'
import FindDisappearedNumbersDemo from './index'

const meta: Meta<typeof FindDisappearedNumbersDemo> = {
  title: 'learn-utils/leetcode/findDisappearedNumbers',
  component: FindDisappearedNumbersDemo,
}

export default meta
type Story = StoryObj<typeof FindDisappearedNumbersDemo>

export const Demo: Story = {}
