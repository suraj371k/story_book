import type { Meta, StoryObj } from '@storybook/react';
import { Toast, ToastProvider, useToast } from './Toast';
import { Button } from '../inputs/Button';

const meta: Meta<typeof Toast> = {
  title: 'Design System/Feedback/Toast',
  component: Toast,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
# Toast

Toasts provide brief notifications or feedback messages to users that appear temporarily.

## Accessibility

- Toasts use appropriate ARIA roles for alerts
- Auto-dismiss functionality can be disabled for important messages
- Toast messages can be dismissed manually with a clear button
- Color contrast meets WCAG 2.1 Level AA requirements

## Usage Guidelines

- Use toasts for non-critical information that doesn't require immediate action
- Keep messages concise and actionable
- Position toasts consistently (usually top-right)
- Use appropriate variants to convey the nature of the message (info, success, warning, error)
- Provide enough time for users to read the message
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'info', 'success', 'warning', 'error'],
      description: 'The visual style of the toast',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'default' },
      },
    },
    title: {
      control: 'text',
      description: 'The title of the toast',
    },
    description: {
      control: 'text',
      description: 'The description of the toast',
    },
    autoClose: {
      control: 'boolean',
      description: 'Whether the toast should close automatically',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
      },
    },
    duration: {
      control: 'number',
      description: 'The duration in milliseconds before the toast closes automatically',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '5000' },
      },
    },
    showIcon: {
      control: 'boolean',
      description: 'Whether to show the icon',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
      },
    },
  },
  decorators: [
    (Story) => (
      <div className="w-[350px] h-[150px]">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Toast>;

export const Default: Story = {
  args: {
    title: 'Toast Message',
    description: 'This is a default toast message.',
  },
};

export const Info: Story = {
  args: {
    variant: 'info',
    title: 'Information',
    description: 'This action has been completed.',
  },
};

export const Success: Story = {
  args: {
    variant: 'success',
    title: 'Success',
    description: 'Your changes have been saved successfully.',
  },
};

export const Warning: Story = {
  args: {
    variant: 'warning',
    title: 'Warning',
    description: 'This action might have unexpected results.',
  },
};

export const Error: Story = {
  args: {
    variant: 'error',
    title: 'Error',
    description: 'There was a problem processing your request.',
  },
};

export const WithoutAutoClose: Story = {
  args: {
    variant: 'info',
    title: 'Persistent Toast',
    description: 'This toast will not close automatically.',
    autoClose: false,
  },
};

export const WithoutIcon: Story = {
  args: {
    title: 'No Icon',
    description: 'This toast does not display an icon.',
    showIcon: false,
  },
};

export const WithLongTitle: Story = {
  args: {
    variant: 'info',
    title: 'This is a very long toast title that might wrap onto multiple lines',
    description: 'The description is also quite detailed and provides more information about the toast message.',
  },
};

export const NewToast: Story = {
  args: {
    variant: 'neutral',
    title: 'This is a very long toast title that might wrap onto multiple lines',
    description: 'The description is also quite detailed and provides more information about the toast message.',
  },
};

export const ToastDemo: StoryObj = {
  render: function ToastExample() {
    // Return a component that uses the toast context
    return (
      <ToastProvider>
        <ToastDemoInner />
      </ToastProvider>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'This example demonstrates how to use the `useToast` hook to show different types of toasts.',
      },
    },
  },
};

// This component is rendered inside the ToastProvider context
function ToastDemoInner() {
  const { addToast } = useToast();
  
  return (
    <div className="flex flex-col space-y-4 items-start">
      <Button
        onClick={() =>
          addToast({
            variant: 'default',
            title: 'Default Toast',
            description: 'This is a default toast message',
          })
        }
      >
        Show Default Toast
      </Button>
      
      <Button
        onClick={() =>
          addToast({
            variant: 'info',
            title: 'Information',
            description: 'This is an informational message',
          })
        }
        variant="secondary"
      >
        Show Info Toast
      </Button>
      
      <Button
        onClick={() =>
          addToast({
            variant: 'success',
            title: 'Success',
            description: 'Operation completed successfully',
          })
        }
        variant="success"
      >
        Show Success Toast
      </Button>
      
      <Button
        onClick={() =>
          addToast({
            variant: 'warning',
            title: 'Warning',
            description: 'This might have consequences',
          })
        }
        variant="warning"
      >
        Show Warning Toast
      </Button>
      
      <Button
        onClick={() =>
          addToast({
            variant: 'error',
            title: 'Error',
            description: 'Something went wrong',
          })
        }
        variant="error"
      >
        Show Error Toast
      </Button>
      
      <Button
        onClick={() =>
          addToast({
            variant: 'info',
            title: 'Persistent Toast',
            description: 'This toast will not close automatically',
            duration: 100000,
          })
        }
        variant="outline"
      >
        Show Persistent Toast
      </Button>
    </div>
  );
}