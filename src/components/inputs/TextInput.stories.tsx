import type { Meta, StoryObj } from '@storybook/react';
import { TextInput } from './TextInput';
import { Mail, User, Lock, Search } from 'lucide-react';

const meta: Meta<typeof TextInput> = {
  title: 'Design System/Inputs/TextInput',
  component: TextInput,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
# Text Input

Text inputs allow users to enter and edit text. They can have different states and variants to match various use cases.

## Accessibility

- All inputs have associated labels for screen readers
- Error states are communicated with aria-invalid and aria-describedby
- Inputs support keyboard focus with visible focus indicators
- Color contrast meets WCAG 2.1 Level AA requirements

## Usage Guidelines

- Always provide clear, concise labels
- Use helper text to provide additional context when needed
- Use error states to show validation issues
- Consider using placeholder text for additional guidance, not as a replacement for labels
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Controls the size of the input',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'md' },
      },
    },
    label: {
      control: 'text',
      description: 'The label for the input',
    },
    helperText: {
      control: 'text',
      description: 'Helper text provides additional context',
    },
    error: {
      control: 'text',
      description: 'Error message to display',
    },
    success: {
      control: 'text',
      description: 'Success message to display',
    },
    clearable: {
      control: 'boolean',
      description: 'Adds a clear button when the input has a value',
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the input',
    },
    required: {
      control: 'boolean',
      description: 'Makes the input required',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text',
    },
    type: {
      control: 'select',
      options: ['text', 'email', 'password', 'search', 'tel', 'url', 'number'],
      description: 'The type of input',
    },
  },
};

export default meta;
type Story = StoryObj<typeof TextInput>;

export const Default: Story = {
  args: {
    label: 'Username',
    placeholder: 'Enter your username',
  },
};

export const WithHelperText: Story = {
  args: {
    label: 'Email',
    placeholder: 'Enter your email',
    helperText: 'We\'ll never share your email with anyone else.',
    type: 'email',
  },
};

export const WithError: Story = {
  args: {
    label: 'Password',
    placeholder: 'Enter your password',
    type: 'password',
    error: 'Password must be at least 8 characters long.',
  },
};

export const WithSuccess: Story = {
  args: {
    label: 'Username',
    placeholder: 'Enter your username',
    value: 'johndoe',
    success: 'Username is available!',
  },
};

export const WithStartIcon: Story = {
  args: {
    label: 'Email Address',
    placeholder: 'Enter your email',
    startIcon: <Mail size={16} />,
    type: 'email',
  },
};

export const Clearable: Story = {
  args: {
    label: 'Search',
    placeholder: 'Search for something',
    startIcon: <Search size={16} />,
    clearable: true,
    value: 'design systems',
  },
};

export const Password: Story = {
  args: {
    label: 'Password',
    placeholder: 'Enter your password',
    type: 'password',
    startIcon: <Lock size={16} />,
  },
};

export const Disabled: Story = {
  args: {
    label: 'Username',
    placeholder: 'Enter your username',
    value: 'johndoe',
    disabled: true,
  },
};

export const Required: Story = {
  args: {
    label: 'Email',
    placeholder: 'Enter your email',
    required: true,
    type: 'email',
  },
};

export const Sizes: StoryObj = {
  render: () => (
    <div className="space-y-4 w-[300px]">
      <TextInput 
        size="sm" 
        label="Small Input" 
        placeholder="Small input" 
      />
      <TextInput 
        size="md" 
        label="Medium Input"
        placeholder="Medium input (default)"
      />
      <TextInput 
        size="lg" 
        label="Large Input" 
        placeholder="Large input" 
      />
    </div>
  ),
};

export const LoginForm: StoryObj = {
  render: () => (
    <div className="space-y-4 w-[350px] p-6 border border-neutral-200 rounded-lg dark:border-neutral-700">
      <h2 className="text-2xl font-semibold text-neutral-900 dark:text-neutral-50">Login</h2>
      <TextInput 
        label="Username" 
        placeholder="Enter your username" 
        startIcon={<User size={16} />}
        required 
      />
      <TextInput 
        label="Password" 
        placeholder="Enter your password" 
        type="password" 
        startIcon={<Lock size={16} />} 
        required
      />
      <div className="pt-2">
        <button className="w-full bg-primary-600 text-white rounded-md py-2 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 dark:bg-primary-700 dark:hover:bg-primary-600">
          Sign In
        </button>
      </div>
    </div>
  ),
};

export const AllStates: StoryObj = {
  render: () => (
    <div className="space-y-4 w-[350px]">
      <TextInput 
        label="Default" 
        placeholder="Default input"
      />
      <TextInput 
        label="With value" 
        value="Input value"
      />
      <TextInput 
        label="Disabled" 
        value="Disabled input"
        disabled
      />
      <TextInput 
        label="With error" 
        value="Invalid value"
        error="This field has an error"
      />
      <TextInput 
        label="With success" 
        value="Valid value"
        success="This value is valid"
      />
      <TextInput 
        label="Required" 
        placeholder="Required input"
        required
      />
      <TextInput 
        label="With helper text" 
        placeholder="Input with helper text"
        helperText="This is some helpful information"
      />
      <TextInput 
        label="Clearable" 
        value="Clearable input"
        clearable
      />
      <TextInput 
        label="With icon" 
        placeholder="Input with icon"
        startIcon={<Mail size={16} />}
      />
      <TextInput 
        label="Password" 
        type="password"
        value="password123"
      />
    </div>
  ),
};