import type { Meta, StoryObj } from '@storybook/react'
import { Text } from './text'

const meta: Meta<typeof Text> = {
  title: 'UI/Text',
  component: Text,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    $fz: '16px',
    $lh: '24px',
    $color: '#000',
    $fw: 400,
    $ta: 'left',
    $whs: 'normal',
    $tt: 'none',
  },
}

export default meta

type Story = StoryObj<typeof Text>

/**
 * Default Text example.
 */
export const Default: Story = {
  args: {
    children: 'Default Text',
  },
}

/**
 * Custom Styled Text example.
 */
export const CustomStyled: Story = {
  args: {
    $fz: '20px',
    $lh: '28px',
    $color: '#007bff',
    $fw: 600,
    $ta: 'center',
    $tt: 'uppercase',
    children: 'Custom Styled Text',
  },
}

/**
 * Truncated Text example.
 */
export const Truncated: Story = {
  args: {
    $fz: '14px',
    $color: '#555',
    $whs: 'nowrap',
    $ta: 'justify',
    children:
      'This is an example of a long text that will be truncated if it exceeds the available width.',
  },
  parameters: {
    docs: {
      description: {
        story:
          'This text is truncated using `white-space: nowrap` and will not wrap onto a new line.',
      },
    },
  },
}
