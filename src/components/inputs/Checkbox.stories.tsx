import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Checkbox } from './Checkbox';

const meta: Meta<typeof Checkbox> = {
  title: 'Design System/Inputs/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
# Checkbox

Checkboxes allow users to select one or more items from a set of options, or to turn an option on or off.

## Accessibility

- Native checkboxes are keyboard accessible and work with screen readers
- Custom checkboxes maintain accessibility with proper ARIA attributes
- Labels are properly associated with inputs
- Error states are communicated with aria-invalid and aria-describedby

## Usage Guidelines

- Use checkboxes for binary choices or multiple selection from a list
- Always provide clear, concise labels
- Group related checkboxes together
- Use error states to show validation issues
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Controls the size of the checkbox',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'md' },
      },
    },
    label: {
      control: 'text',
      description: 'The label for the checkbox',
    },
    helperText: {
      control: 'text',
      description: 'Helper text provides additional context',
    },
    error: {
      control: 'text',
      description: 'Error message to display',
    },
    checked: {
      control: 'boolean',
      description: 'Whether the checkbox is checked',
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the checkbox',
    },
    required: {
      control: 'boolean',
      description: 'Makes the checkbox required',
    },
    hideNativeCheckbox: {
      control: 'boolean',
      description: 'Use custom checkbox styling instead of native',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  args: {
    label: 'Accept terms and conditions',
  },
};

export const WithHelperText: Story = {
  args: {
    label: 'Subscribe to newsletter',
    helperText: 'You can unsubscribe at any time.',
  },
};

export const WithError: Story = {
  args: {
    label: 'Accept terms and conditions',
    error: 'You must accept the terms to continue.',
    required: true,
  },
};

export const Disabled: Story = {
  args: {
    label: 'Remember me',
    disabled: true,
  },
};

export const DisabledChecked: Story = {
  args: {
    label: 'Remember me',
    disabled: true,
    checked: true,
  },
};

export const Required: Story = {
  args: {
    label: 'Accept terms and conditions',
    required: true,
  },
};

export const CustomCheckbox: Story = {
  args: {
    label: 'Use custom checkbox style',
    hideNativeCheckbox: true,
  },
};

export const Sizes: StoryObj = {
  render: () => (
    <div className="space-y-4 w-[300px]">
      <Checkbox
        size="sm"
        label="Small checkbox"
        hideNativeCheckbox
      />
      <Checkbox
        size="md"
        label="Medium checkbox (default)"
        hideNativeCheckbox
      />
      <Checkbox
        size="lg"
        label="Large checkbox"
        hideNativeCheckbox
      />
    </div>
  ),
};

export const PreferencesGroup: StoryObj = {
  render: function PreferencesExample() {
    const [preferences, setPreferences] = useState({
      marketing: true,
      updates: false,
      newsletter: false,
    });
    
    const handleChange = (name: keyof typeof preferences) => (e: React.ChangeEvent<HTMLInputElement>) => {
      setPreferences({
        ...preferences,
        [name]: e.target.checked,
      });
    };
    
    return (
      <div className="space-y-4 w-[350px] p-6 border border-neutral-200 rounded-lg dark:border-neutral-700">
        <h2 className="text-2xl font-semibold text-neutral-900 dark:text-neutral-50">Email Preferences</h2>
        <div className="space-y-3">
          <Checkbox
            label="Marketing emails"
            helperText="Receive emails about new products and offers."
            checked={preferences.marketing}
            onChange={handleChange('marketing')}
            hideNativeCheckbox
          />
          <Checkbox
            label="Product updates"
            helperText="Get notified about updates to products you've purchased."
            checked={preferences.updates}
            onChange={handleChange('updates')}
            hideNativeCheckbox
          />
          <Checkbox
            label="Weekly newsletter"
            helperText="Receive our weekly newsletter with industry news and tips."
            checked={preferences.newsletter}
            onChange={handleChange('newsletter')}
            hideNativeCheckbox
          />
        </div>
        <div className="pt-2">
          <button className="w-full bg-primary-600 text-white rounded-md py-2 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 dark:bg-primary-700 dark:hover:bg-primary-600">
            Save Preferences
          </button>
        </div>
      </div>
    );
  },
};

export const AllStates: StoryObj = {
  render: () => (
    <div className="space-y-4 w-[350px]">
      <Checkbox
        label="Default unchecked"
        hideNativeCheckbox
      />
      <Checkbox
        label="Default checked"
        checked
        hideNativeCheckbox
      />
      <Checkbox
        label="With helper text"
        helperText="This is some helpful information"
        hideNativeCheckbox
      />
      <Checkbox
        label="With error"
        error="This field has an error"
        hideNativeCheckbox
      />
      <Checkbox
        label="Required"
        required
        hideNativeCheckbox
      />
      <Checkbox
        label="Disabled unchecked"
        disabled
        hideNativeCheckbox
      />
      <Checkbox
        label="Disabled checked"
        disabled
        checked
        hideNativeCheckbox
      />
    </div>
  ),
};