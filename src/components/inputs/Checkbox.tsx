import React, { forwardRef } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../utils/cn';
import { Check } from 'lucide-react';
import { Label, HelperText } from '../typography/Typography';

const checkboxVariants = cva(
  'h-4 w-4 rounded border border-neutral-300 text-primary-600 focus:ring-2 focus:ring-primary-500 focus:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50 dark:border-neutral-600 dark:bg-neutral-800 dark:checked:border-primary-500 dark:checked:bg-primary-600 dark:focus:ring-primary-400',
  {
    variants: {
      size: {
        sm: 'h-3 w-3',
        md: 'h-4 w-4',
        lg: 'h-5 w-5',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  }
);

// Custom checkbox to replace the native one
const CustomCheckbox = ({
  checked,
  disabled,
  size = 'md',
}: {
  checked: boolean;
  disabled?: boolean;
  size?: 'sm' | 'md' | 'lg';
}) => {
  // Size in pixels mapping
  const sizeMap = {
    sm: 12,
    md: 16,
    lg: 20,
  };
  
  return (
    <div
      className={cn(
        'relative flex items-center justify-center rounded border transition-colors',
        checked
          ? 'border-primary-600 bg-primary-600 dark:border-primary-500 dark:bg-primary-500'
          : 'border-neutral-300 bg-white dark:border-neutral-600 dark:bg-neutral-800',
        disabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer',
        size === 'sm' ? 'h-3 w-3' : size === 'lg' ? 'h-5 w-5' : 'h-4 w-4'
      )}
    >
      {checked && (
        <Check
          className="text-white"
          strokeWidth={3}
          size={sizeMap[size] - 6}
          aria-hidden="true"
        />
      )}
    </div>
  );
};

export interface CheckboxProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'>,
    VariantProps<typeof checkboxVariants> {
  label?: string;
  helperText?: string;
  error?: string;
  hideNativeCheckbox?: boolean;
  labelProps?: React.LabelHTMLAttributes<HTMLLabelElement>;
  helperTextProps?: React.HTMLAttributes<HTMLParagraphElement>;
  containerProps?: React.HTMLAttributes<HTMLDivElement>;
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({
    className,
    size,
    label,
    helperText,
    error,
    checked,
    hideNativeCheckbox = false,
    labelProps,
    helperTextProps,
    containerProps,
    disabled,
    required,
    id,
    ...props
  }, ref) => {
    const checkboxId = id || `checkbox-${Math.random().toString(36).substring(2, 9)}`;
    
    return (
      <div className={cn('flex flex-col space-y-1.5', containerProps?.className)} {...containerProps}>
        <div className="flex items-start gap-2">
          <div className="relative flex items-center">
            <input
              id={checkboxId}
              ref={ref}
              type="checkbox"
              className={cn(
                hideNativeCheckbox ? 'sr-only' : checkboxVariants({ size, className })
              )}
              disabled={disabled}
              required={required}
              checked={checked}
              aria-invalid={!!error}
              aria-describedby={helperText || error ? `${checkboxId}-description` : undefined}
              {...props}
            />
            {hideNativeCheckbox && (
              <CustomCheckbox checked={!!checked} disabled={disabled} size={size} />
            )}
          </div>
          {label && (
            <Label
              htmlFor={checkboxId}
              size={size === 'sm' ? 'small' : size === 'lg' ? 'large' : 'default'}
              className="cursor-pointer"
              {...labelProps}
            >
              {label}
              {required && <span className="ml-1 text-error-500 dark:text-error-400">*</span>}
            </Label>
          )}
        </div>
        {(helperText || error) && (
          <HelperText
            id={`${checkboxId}-description`}
            state={error ? 'error' : 'default'}
            size={size === 'sm' ? 'small' : 'default'}
            className="pl-6"
            {...helperTextProps}
          >
            {error || helperText}
          </HelperText>
        )}
      </div>
    );
  }
);

Checkbox.displayName = 'Checkbox';