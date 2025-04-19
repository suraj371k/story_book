import React, { forwardRef, useState } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../utils/cn';
import { Eye, EyeOff, X } from 'lucide-react';
import { Label, HelperText } from '../typography/Typography';

const inputVariants = cva(
  'w-full flex h-10 rounded-md border border-neutral-300 bg-white px-3 py-2 text-sm text-neutral-900 transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-neutral-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-50 dark:placeholder:text-neutral-400 dark:focus-visible:ring-primary-400',
  {
    variants: {
      size: {
        sm: 'h-8 px-2 text-xs',
        md: 'h-10 px-3 text-sm',
        lg: 'h-12 px-4 text-base',
      },
      state: {
        default: 'border-neutral-300 dark:border-neutral-700',
        error: 'border-error-500 dark:border-error-400 focus-visible:ring-error-500 dark:focus-visible:ring-error-400',
        success: 'border-success-500 dark:border-success-400 focus-visible:ring-success-500 dark:focus-visible:ring-success-400',
      },
    },
    defaultVariants: {
      size: 'md',
      state: 'default',
    },
  }
);

const iconWrapperVariants = cva(
  'absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1 text-neutral-500 dark:text-neutral-400',
  {
    variants: {
      size: {
        sm: 'right-2',
        md: 'right-3',
        lg: 'right-4',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  }
);

export interface TextInputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    Omit<VariantProps<typeof inputVariants>, 'state'> {
  label?: string;
  helperText?: string;
  error?: string;
  success?: string;
  clearable?: boolean;
  startIcon?: React.ReactNode;
  labelProps?: React.LabelHTMLAttributes<HTMLLabelElement>;
  helperTextProps?: React.HTMLAttributes<HTMLParagraphElement>;
  containerProps?: React.HTMLAttributes<HTMLDivElement>;
}

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  ({
    className,
    type = 'text',
    size,
    label,
    helperText,
    error,
    success,
    clearable = false,
    startIcon,
    labelProps,
    helperTextProps,
    containerProps,
    disabled,
    required,
    id,
    value,
    onChange,
    ...props
  }, ref) => {
    const [inputValue, setInputValue] = useState(value || '');
    const [showPassword, setShowPassword] = useState(false);
    const inputId = id || `input-${Math.random().toString(36).substring(2, 9)}`;
    
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setInputValue(e.target.value);
      onChange?.(e);
    };
    
    const handleClear = () => {
      setInputValue('');
      const syntheticEvent = {
        target: { value: '' },
      } as React.ChangeEvent<HTMLInputElement>;
      onChange?.(syntheticEvent);
    };
    
    const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
    };
    
    // Determine input state based on error/success
    const state = error ? 'error' : success ? 'success' : 'default';
    
    // Determine current input type
    const currentType = type === 'password' && showPassword ? 'text' : type;
    
    // Get helper text content
    const helperTextContent = error || success || helperText;
    
    // Get helper text state
    const helperTextState = error ? 'error' : success ? 'success' : 'default';
    
    return (
      <div className={cn('space-y-1.5', containerProps?.className)} {...containerProps}>
        {label && (
          <Label
            htmlFor={inputId}
            size={size === 'sm' ? 'small' : size === 'lg' ? 'large' : 'default'}
            {...labelProps}
          >
            {label}
            {required && <span className="ml-1 text-error-500 dark:text-error-400">*</span>}
          </Label>
        )}
        <div className="relative">
          {startIcon && (
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500 dark:text-neutral-400">
              {startIcon}
            </div>
          )}
          <input
            id={inputId}
            ref={ref}
            type={currentType}
            className={cn(
              inputVariants({ size, state }),
              startIcon && 'pl-9',
              (clearable || type === 'password') && 'pr-9',
              className
            )}
            value={inputValue}
            onChange={handleInputChange}
            disabled={disabled}
            required={required}
            aria-invalid={!!error}
            aria-describedby={helperTextContent ? `${inputId}-helper-text` : undefined}
            {...props}
          />
          <div className={iconWrapperVariants({ size })}>
            {clearable && inputValue && (
              <button
                type="button"
                onClick={handleClear}
                className="rounded-full p-0.5 hover:bg-neutral-100 dark:hover:bg-neutral-700 focus:outline-none focus:ring-2 focus:ring-primary-500"
                aria-label="Clear input"
                disabled={disabled}
              >
                <X size={size === 'sm' ? 14 : size === 'lg' ? 20 : 16} />
              </button>
            )}
            {type === 'password' && (
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="rounded-full p-0.5 hover:bg-neutral-100 dark:hover:bg-neutral-700 focus:outline-none focus:ring-2 focus:ring-primary-500"
                aria-label={showPassword ? 'Hide password' : 'Show password'}
                disabled={disabled}
              >
                {showPassword ? (
                  <EyeOff size={size === 'sm' ? 14 : size === 'lg' ? 20 : 16} />
                ) : (
                  <Eye size={size === 'sm' ? 14 : size === 'lg' ? 20 : 16} />
                )}
              </button>
            )}
          </div>
        </div>
        {helperTextContent && (
          <HelperText
            id={`${inputId}-helper-text`}
            state={helperTextState}
            size={size === 'sm' ? 'small' : 'default'}
            {...helperTextProps}
          >
            {helperTextContent}
          </HelperText>
        )}
      </div>
    );
  }
);

TextInput.displayName = 'TextInput';