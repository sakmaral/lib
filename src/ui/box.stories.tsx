import type { Meta, StoryObj } from '@storybook/react'
import { Box } from './box'

const meta: Meta<typeof Box> = {
  title: 'UI/Box',
  component: Box,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    $width: '200px',
    $height: '200px',
    $bg: 'lightgray',
    $display: 'flex',
    $jc: 'center',
    $ai: 'center',
  },
}

export default meta

type Story = StoryObj<typeof Box>

/**
 * Default Box example.
 */
export const Default: Story = {
  args: {
    children: 'Default Box',
  },
}

/**
 * Custom Color Box example.
 */
export const CustomColor: Story = {
  args: {
    $width: '100px',
    $height: '100px',
    $bg: 'red',
    children: 'Red Box',
  },
}

/**
 * Flexible Box example.
 */
export const Flexible: Story = {
  args: {
    $flex: true,
    $jc: 'space-around',
    $ai: 'center',
    $padding: '20px',
    children: (
      <>
        <Box
          $width='50px'
          $height='50px'
          $bg='blue'
        >
          Blue
        </Box>
        <Box
          $width='50px'
          $height='50px'
          $bg='green'
        >
          Green
        </Box>
        <Box
          $width='50px'
          $height='50px'
          $bg='orange'
        >
          Orange
        </Box>
      </>
    ),
  },
}
