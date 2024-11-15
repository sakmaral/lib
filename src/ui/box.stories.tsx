import type { Meta, StoryObj } from '@storybook/react'
import { Box } from './box'

const meta = {
  title: 'ui/box',
  component: Box,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {},
} satisfies Meta<typeof Box>

export default meta
type Story = StoryObj<typeof meta>

export const Small: Story = {
  args: {},
}
