import React from 'react';
import { cn } from '../../utils/cn';
import { cva, type VariantProps } from 'class-variance-authority';

// Typography variants using CVA for consistent styling
const headingVariants = cva(
  'font-display font-bold leading-tight tracking-tight text-neutral-900 dark:text-neutral-50',
  {
    variants: {
      level: {
        h1: 'text-5xl md:text-6xl',
        h2: 'text-4xl md:text-5xl',
        h3: 'text-3xl md:text-4xl',
        h4: 'text-2xl md:text-3xl',
        h5: 'text-xl md:text-2xl',
        h6: 'text-lg md:text-xl',
      },
    },
    defaultVariants: {
      level: 'h1',
    },
  }
);

const paragraphVariants = cva(
  'font-sans leading-relaxed text-neutral-700 dark:text-neutral-300',
  {
    variants: {
      size: {
        small: 'text-sm',
        default: 'text-base',
        large: 'text-lg',
      },
    },
    defaultVariants: {
      size: 'default',
    },
  }
);

const labelVariants = cva(
  'font-sans font-medium text-neutral-700 dark:text-neutral-300',
  {
    variants: {
      size: {
        small: 'text-xs',
        default: 'text-sm',
        large: 'text-base',
      },
    },
    defaultVariants: {
      size: 'default',
    },
  }
);

const helperTextVariants = cva(
  'font-sans text-neutral-500 dark:text-neutral-400',
  {
    variants: {
      state: {
        default: '',
        error: 'text-error-600 dark:text-error-400',
        success: 'text-success-600 dark:text-success-400',
      },
      size: {
        small: 'text-xs',
        default: 'text-sm',
      },
    },
    defaultVariants: {
      state: 'default',
      size: 'default',
    },
  }
);

export interface HeadingProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof headingVariants> {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

export const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ className, level, as, children, ...props }, ref) => {
    const Component = as || level || 'h1';
    
    return (
      <Component
        ref={ref}
        className={cn(headingVariants({ level, className }))}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

Heading.displayName = 'Heading';

export interface ParagraphProps
  extends React.HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof paragraphVariants> {}

export const Paragraph = React.forwardRef<HTMLParagraphElement, ParagraphProps>(
  ({ className, size, children, ...props }, ref) => (
    <p
      ref={ref}
      className={cn(paragraphVariants({ size, className }))}
      {...props}
    >
      {children}
    </p>
  )
);

Paragraph.displayName = 'Paragraph';

export interface LabelProps
  extends React.LabelHTMLAttributes<HTMLLabelElement>,
    VariantProps<typeof labelVariants> {}

export const Label = React.forwardRef<HTMLLabelElement, LabelProps>(
  ({ className, size, children, ...props }, ref) => (
    <label
      ref={ref}
      className={cn(labelVariants({ size, className }))}
      {...props}
    >
      {children}
    </label>
  )
);

Label.displayName = 'Label';

export interface HelperTextProps
  extends React.HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof helperTextVariants> {}

export const HelperText = React.forwardRef<HTMLParagraphElement, HelperTextProps>(
  ({ className, state, size, children, ...props }, ref) => (
    <p
      ref={ref}
      className={cn(helperTextVariants({ state, size, className }))}
      {...props}
    >
      {children}
    </p>
  )
);

HelperText.displayName = 'HelperText';