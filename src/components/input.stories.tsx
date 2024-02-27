import type { Meta, StoryObj } from '@storybook/react'
import { Plus, Search } from 'lucide-react'

import { Input } from './input'

const meta = {
  title: 'Example/Input',
  component: Input,

  tags: ['autodocs'],

  argTypes: {
    label: { name: 'Label', type: 'string', description: 'Label from input' },
    type: { name: 'Type', type: 'string', description: 'Type from input' },
    errorMessage: {
      name: 'Error text',
      type: 'string',
      description: 'Input validation message'
    },
    rightIcon: {
      name: 'Input icon',
      type: 'symbol',
      description: 'Icon at right side on input'
    },
    placeholder: {
      name: 'Placeholder',
      type: 'string',
      description: 'Placeholde from input'
    }
  }
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const Text: Story = {
  args: {
    label: 'Label text',
    name: 'Input text',
    type: 'text',
    placeholder: 'Ex: 77814-440',
    rightIcon: (
      <button>
        <Search className="cursor-pointer size-7 text-slate-400" />
      </button>
    )
  }
}

export const WithError: Story = {
  args: {
    label: 'Label text',
    name: 'Input text',
    type: 'text',
    errorMessage: 'Error message from zod',
    placeholder: 'Ex: 77814-440',
    rightIcon: (
      <button>
        <Search className="cursor-pointer size-7 text-slate-400" />
      </button>
    )
  }
}

export const Number: Story = {
  args: {
    label: 'Label number',
    name: 'Input number',
    type: 'number',
    placeholder: 'Ex: 40',
    rightIcon: (
      <button>
        <Plus className="cursor-pointer size-7 text-slate-400" />
      </button>
    )
  }
}
