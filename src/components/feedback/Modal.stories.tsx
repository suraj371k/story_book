import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Modal } from './Modal';
import { Button } from '../inputs/Button';
import { TextInput } from '../inputs/TextInput';
import { Checkbox } from '../inputs/Checkbox';
import { Heading, Paragraph } from '../typography/Typography';
import { AlertTriangle, Info, CheckCircle, X } from 'lucide-react';

const meta: Meta<typeof Modal> = {
  title: 'Design System/Feedback/Modal',
  component: Modal,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
# Modal

Modals are dialog boxes that overlay content to provide critical information or request user input.

## Accessibility

- Properly manages focus - focus is trapped within the modal when open
- Supports keyboard navigation (Escape key to close)
- Uses correct ARIA attributes for dialog role
- Prevents interaction with content behind the modal
- Provides close button for easy dismissal

## Usage Guidelines

- Use modals sparingly for important information or critical actions
- Keep content concise and focused on a single task
- Provide clear titles and descriptive buttons
- Allow users to dismiss modals easily (close button, clicking outside, ESC key)
- Avoid nested modals
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    isOpen: {
      control: 'boolean',
      description: 'Controls whether the modal is open',
    },
    onClose: {
      action: 'closed',
      description: 'Function called when the modal should close',
    },
    title: {
      control: 'text',
      description: 'The title of the modal',
    },
    description: {
      control: 'text',
      description: 'Additional descriptive text for the modal',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl', '2xl', 'full'],
      description: 'The size of the modal',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'md' },
      },
    },
    closeOnOverlayClick: {
      control: 'boolean',
      description: 'Whether clicking the overlay should close the modal',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
      },
    },
    closeOnEscape: {
      control: 'boolean',
      description: 'Whether pressing escape should close the modal',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
      },
    },
    showCloseButton: {
      control: 'boolean',
      description: 'Whether to show the close button',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Modal>;

const ModalTemplate: Story = {
  render: function ModalExample(args) {
    const [isOpen, setIsOpen] = useState(false);
    
    return (
      <div>
        <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
        <Modal {...args} isOpen={isOpen} onClose={() => setIsOpen(false)}>
          <p>Modal content goes here.</p>
        </Modal>
      </div>
    );
  },
};

export const Default = {
  ...ModalTemplate,
  args: {
    title: 'Modal Title',
    description: 'This is a description of the modal.',
    footer: (
      <div className="flex justify-end space-x-2">
        <Button variant="outline">Cancel</Button>
        <Button>Confirm</Button>
      </div>
    ),
  },
};

export const DeleteConfirmation: Story = {
  render: function DeleteConfirmationExample() {
    const [isOpen, setIsOpen] = useState(false);
    const [isDeleting, setIsDeleting] = useState(false);
    
    const handleDelete = () => {
      setIsDeleting(true);
      // Simulate API call
      setTimeout(() => {
        setIsDeleting(false);
        setIsOpen(false);
      }, 1500);
    };
    
    return (
      <div>
        <Button variant="error" onClick={() => setIsOpen(true)}>Delete Item</Button>
        <Modal
          isOpen={isOpen}
          onClose={() => !isDeleting && setIsOpen(false)}
          size="sm"
        >
          <div className="text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-error-100 dark:bg-error-900 mb-4">
              <AlertTriangle className="h-6 w-6 text-error-600 dark:text-error-400" />
            </div>
            <Heading level="h3" className="text-lg font-semibold">Delete Item</Heading>
            <Paragraph className="mt-2">Are you sure you want to delete this item? This action cannot be undone.</Paragraph>
            <div className="mt-6 flex justify-center space-x-3">
              <Button
                variant="outline"
                onClick={() => setIsOpen(false)}
                disabled={isDeleting}
              >
                Cancel
              </Button>
              <Button
                variant="error"
                onClick={handleDelete}
                disabled={isDeleting}
              >
                {isDeleting ? 'Deleting...' : 'Delete'}
              </Button>
            </div>
          </div>
        </Modal>
      </div>
    );
  },
};

export const SignupForm: Story = {
  render: function SignupFormExample() {
    const [isOpen, setIsOpen] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      setIsSubmitting(true);
      // Simulate API call
      setTimeout(() => {
        setIsSubmitting(false);
        setIsOpen(false);
      }, 1500);
    };
    
    return (
      <div>
        <Button onClick={() => setIsOpen(true)}>Sign Up</Button>
        <Modal
          isOpen={isOpen}
          onClose={() => !isSubmitting && setIsOpen(false)}
          title="Create an account"
          description="Fill out the form below to create your account."
          size="md"
        >
          <form onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <TextInput label="First Name" placeholder="John" required />
                <TextInput label="Last Name" placeholder="Doe" required />
              </div>
              <TextInput
                label="Email"
                placeholder="you@example.com"
                type="email"
                required
              />
              <TextInput
                label="Password"
                placeholder="Create a password"
                type="password"
                helperText="Password must be at least 8 characters"
                required
              />
              <Checkbox
                label="I agree to the Terms of Service and Privacy Policy"
                required
                hideNativeCheckbox
              />
            </div>
            <div className="mt-6 flex justify-end space-x-2">
              <Button
                variant="outline"
                onClick={() => setIsOpen(false)}
                type="button"
                disabled={isSubmitting}
              >
                Cancel
              </Button>
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Creating account...' : 'Create account'}
              </Button>
            </div>
          </form>
        </Modal>
      </div>
    );
  },
};

export const InformationModal: Story = {
  render: function InformationModalExample() {
    const [isOpen, setIsOpen] = useState(false);
    
    return (
      <div>
        <Button variant="secondary" onClick={() => setIsOpen(true)}>
          Learn More
        </Button>
        <Modal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          size="lg"
        >
          <div className="text-center mb-4">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary-100 dark:bg-primary-900">
              <Info className="h-6 w-6 text-primary-600 dark:text-primary-400" />
            </div>
            <Heading level="h3" className="mt-3 text-xl font-semibold">
              About Design Systems
            </Heading>
          </div>
          <div className="text-left">
            <Paragraph className="mb-4">
              A design system is a collection of reusable components, guided by clear standards, that can be assembled to build any number of applications.
            </Paragraph>
            <Paragraph className="mb-4">
              Design systems help teams build better products faster by making design reusable and scalable. The design system is not just a UI kit or component library; it's a complete set of standards, documentation, and principles along with the tools to implement them.
            </Paragraph>
            <Paragraph className="mb-4">
              Key benefits of design systems include:
            </Paragraph>
            <ul className="list-disc pl-5 mb-4 space-y-2">
              <li>Consistency across products and platforms</li>
              <li>Improved collaboration between designers and developers</li>
              <li>Faster product development and iteration</li>
              <li>Better quality through tested, accessible components</li>
              <li>Scalable design that grows with your organization</li>
            </ul>
          </div>
          <div className="mt-6 flex justify-center">
            <Button onClick={() => setIsOpen(false)}>
              Got it, thanks!
            </Button>
          </div>
        </Modal>
      </div>
    );
  },
};

export const SuccessModal: Story = {
  render: function SuccessModalExample() {
    const [isOpen, setIsOpen] = useState(false);
    
    const handleOpenModal = () => {
      // Simulate some action being completed
      setTimeout(() => {
        setIsOpen(true);
      }, 500);
    };
    
    return (
      <div>
        <Button
          variant="success"
          onClick={handleOpenModal}
        >
          Complete Action
        </Button>
        <Modal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          size="sm"
        >
          <div className="text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-success-100 dark:bg-success-900 mb-4">
              <CheckCircle className="h-6 w-6 text-success-600 dark:text-success-400" />
            </div>
            <Heading level="h3" className="text-lg font-semibold">Action Completed</Heading>
            <Paragraph className="mt-2">Your action has been completed successfully!</Paragraph>
            <div className="mt-6">
              <Button
                variant="success"
                onClick={() => setIsOpen(false)}
                className="w-full"
              >
                Continue
              </Button>
            </div>
          </div>
        </Modal>
      </div>
    );
  },
};

export const ModalSizes: Story = {
  render: function ModalSizesExample() {
    const [openSize, setOpenSize] = useState<string | null>(null);
    
    return (
      <div className="flex flex-col space-y-2">
        {(['sm', 'md', 'lg', 'xl', '2xl', 'full'] as const).map((size) => (
          <Button key={size} onClick={() => setOpenSize(size)}>
            {size.toUpperCase()} Modal
          </Button>
        ))}
        
        {(['sm', 'md', 'lg', 'xl', '2xl', 'full'] as const).map((size) => (
          <Modal
            key={size}
            isOpen={openSize === size}
            onClose={() => setOpenSize(null)}
            title={`${size.toUpperCase()} Modal`}
            size={size}
          >
            <Paragraph>
              This is an example of a modal with size <strong>{size}</strong>.
            </Paragraph>
            <div className="mt-4">
              <Button onClick={() => setOpenSize(null)}>Close</Button>
            </div>
          </Modal>
        ))}
      </div>
    );
  },
};