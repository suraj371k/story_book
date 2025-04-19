import type { Meta, StoryObj } from '@storybook/react';
import { Heading, Paragraph, Label, HelperText } from './Typography';

const meta: Meta<typeof Heading> = {
  title: 'Design System/Typography',
  component: Heading,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
# Typography System

The typography system provides consistent text styling across the application.

## Accessibility

- Font sizes scale appropriately on different screen sizes
- Color contrast meets WCAG 2.1 Level AA standards
- Proper heading hierarchy is essential for screen readers

## Usage Guidelines

- Maintain proper heading hierarchy (h1 → h2 → h3, etc.)
- Use the appropriate component for its semantic meaning
- Don't skip heading levels for styling reasons
        `,
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;

type HeadingStory = StoryObj<typeof Heading>;
type ParagraphStory = StoryObj<typeof Paragraph>;
type LabelStory = StoryObj<typeof Label>;
type HelperTextStory = StoryObj<typeof HelperText>;

export const HeadingH1: HeadingStory = {
  args: {
    level: 'h1',
    children: 'Heading Level 1',
  },
};

export const HeadingH2: HeadingStory = {
  args: {
    level: 'h2',
    children: 'Heading Level 2',
  },
};

export const HeadingH3: HeadingStory = {
  args: {
    level: 'h3',
    children: 'Heading Level 3',
  },
};

export const HeadingH4: HeadingStory = {
  args: {
    level: 'h4',
    children: 'Heading Level 4',
  },
};

export const HeadingH5: HeadingStory = {
  args: {
    level: 'h5',
    children: 'Heading Level 5',
  },
};

export const HeadingH6: HeadingStory = {
  args: {
    level: 'h6',
    children: 'Heading Level 6',
  },
};

export const HeadingWithCustomStyle: HeadingStory = {
  args: {
    level: 'h2',
    children: 'Custom Styled Heading',
    className: 'text-primary-600 underline',
  },
};

export const ParagraphDefault: ParagraphStory = {
  render: () => <Paragraph>This is a default paragraph with standard text size.</Paragraph>,
};

export const ParagraphSmall: ParagraphStory = {
  render: () => <Paragraph size="small">This is a small paragraph with reduced text size.</Paragraph>,
};

export const ParagraphLarge: ParagraphStory = {
  render: () => <Paragraph size="large">This is a large paragraph with increased text size.</Paragraph>,
};

export const LabelDefault: LabelStory = {
  render: () => <Label>Default Label</Label>,
};

export const LabelSmall: LabelStory = {
  render: () => <Label size="small">Small Label</Label>,
};

export const LabelLarge: LabelStory = {
  render: () => <Label size="large">Large Label</Label>,
};

export const HelperTextDefault: HelperTextStory = {
  render: () => <HelperText>This is helper text to provide additional context.</HelperText>,
};

export const HelperTextError: HelperTextStory = {
  render: () => <HelperText state="error">This field is required.</HelperText>,
};

export const HelperTextSuccess: HelperTextStory = {
  render: () => <HelperText state="success">Your input has been validated successfully.</HelperText>,
};

export const TypographyShowcase: StoryObj = {
  render: () => (
    <div className="space-y-6">
      <div>
        <Heading level="h1">Typography System</Heading>
        <Paragraph>A comprehensive typography system for consistent text styling</Paragraph>
      </div>
      
      <div className="space-y-2">
        <Heading level="h2">Headings</Heading>
        <Heading level="h1">Heading 1</Heading>
        <Heading level="h2">Heading 2</Heading>
        <Heading level="h3">Heading 3</Heading>
        <Heading level="h4">Heading 4</Heading>
        <Heading level="h5">Heading 5</Heading>
        <Heading level="h6">Heading 6</Heading>
      </div>
      
      <div className="space-y-4">
        <Heading level="h2">Paragraphs</Heading>
        <div>
          <Heading level="h5">Default Paragraph</Heading>
          <Paragraph>
            This is a default paragraph with standard text size. It includes a sensible line height
            and color for optimal readability in both light and dark modes.
          </Paragraph>
        </div>
        <div>
          <Heading level="h5">Small Paragraph</Heading>
          <Paragraph size="small">
            This is a small paragraph with reduced text size, useful for less prominent content
            or when space is limited.
          </Paragraph>
        </div>
        <div>
          <Heading level="h5">Large Paragraph</Heading>
          <Paragraph size="large">
            This is a large paragraph with increased text size, suitable for key information
            that needs to stand out without using headings.
          </Paragraph>
        </div>
      </div>
      
      <div className="space-y-4">
        <Heading level="h2">Labels</Heading>
        <div className="space-y-1">
          <Label>Default Label</Label>
          <input className="w-full px-3 py-2 border border-neutral-300 rounded-md" placeholder="Input with default label" />
        </div>
        <div className="space-y-1">
          <Label size="small">Small Label</Label>
          <input className="w-full px-3 py-2 border border-neutral-300 rounded-md" placeholder="Input with small label" />
        </div>
        <div className="space-y-1">
          <Label size="large">Large Label</Label>
          <input className="w-full px-3 py-2 border border-neutral-300 rounded-md" placeholder="Input with large label" />
        </div>
      </div>
      
      <div className="space-y-4">
        <Heading level="h2">Helper Text</Heading>
        <div className="space-y-1">
          <Label>Email</Label>
          <input className="w-full px-3 py-2 border border-neutral-300 rounded-md" placeholder="Enter your email" />
          <HelperText>We'll never share your email with anyone else.</HelperText>
        </div>
        <div className="space-y-1">
          <Label>Password</Label>
          <input className="w-full px-3 py-2 border border-error-300 rounded-md" type="password" />
          <HelperText state="error">Password must be at least 8 characters long.</HelperText>
        </div>
        <div className="space-y-1">
          <Label>Username</Label>
          <input className="w-full px-3 py-2 border border-success-300 rounded-md" value="johndoe" readOnly />
          <HelperText state="success">Username is available!</HelperText>
        </div>
      </div>
    </div>
  ),
};