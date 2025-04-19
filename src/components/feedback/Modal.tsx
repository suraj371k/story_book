import React, { Fragment, useRef, useEffect } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../utils/cn';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { Button } from '../inputs/Button';
import { Heading } from '../typography/Typography';

// Modal variants
const modalVariants = cva(
  'relative mx-auto overflow-y-auto rounded-lg bg-white dark:bg-neutral-800 shadow-lg',
  {
    variants: {
      size: {
        sm: 'max-w-sm',
        md: 'max-w-md',
        lg: 'max-w-lg',
        xl: 'max-w-xl',
        '2xl': 'max-w-2xl',
        full: 'w-full h-full max-w-full m-0 rounded-none',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  }
);

export interface ModalProps extends VariantProps<typeof modalVariants> {
  isOpen: boolean;
  onClose: () => void;
  title?: React.ReactNode;
  description?: React.ReactNode;
  children?: React.ReactNode;
  footer?: React.ReactNode;
  closeOnOverlayClick?: boolean;
  closeOnEscape?: boolean;
  showCloseButton?: boolean;
  overlayClassName?: string;
  contentClassName?: string;
  bodyClassName?: string;
  footerClassName?: string;
  initialFocus?: React.RefObject<HTMLElement>;
}

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  description,
  children,
  footer,
  closeOnOverlayClick = true,
  closeOnEscape = true,
  showCloseButton = true,
  size,
  overlayClassName,
  contentClassName,
  bodyClassName,
  footerClassName,
  initialFocus,
}) => {
  const contentRef = useRef<HTMLDivElement>(null);
  
  // Handle ESC key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen && closeOnEscape) {
        onClose();
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, closeOnEscape]);
  
  // Trap focus inside modal
  useEffect(() => {
    if (!isOpen) return;
    
    const contentElement = contentRef.current;
    
    if (!contentElement) return;
    
    // Focus the initial element or the content div
    const elementToFocus = initialFocus?.current || contentElement;
    if (elementToFocus) {
      // Delay focus to ensure the element is visible
      setTimeout(() => {
        if (document.body.contains(elementToFocus)) {
          (elementToFocus as HTMLElement).focus();
        }
      }, 100);
    }
    
    // Prevent scrolling when modal is open
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen, initialFocus]);
  
  // Handle overlay click
  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget && closeOnOverlayClick) {
      onClose();
    }
  };
  
  return (
    <AnimatePresence>
      {isOpen && (
        <Fragment>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className={cn(
              'fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm',
              overlayClassName
            )}
            onClick={handleOverlayClick}
            aria-hidden="true"
            data-testid="modal-overlay"
          >
            {/* Modal Content */}
            <motion.div
              ref={contentRef}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className={cn(modalVariants({ size }), contentClassName)}
              role="dialog"
              aria-modal="true"
              aria-labelledby={title ? 'modal-title' : undefined}
              aria-describedby={description ? 'modal-description' : undefined}
              tabIndex={-1}
            >
              {/* Close Button */}
              {showCloseButton && (
                <button
                  className="absolute top-3 right-3 p-1 rounded-full text-neutral-500 hover:text-neutral-700 hover:bg-neutral-100 dark:text-neutral-400 dark:hover:text-neutral-200 dark:hover:bg-neutral-700 focus:outline-none focus:ring-2 focus:ring-primary-500"
                  onClick={onClose}
                  aria-label="Close modal"
                  data-testid="modal-close-button"
                >
                  <X size={18} />
                </button>
              )}
              
              {/* Header */}
              {(title || description) && (
                <div className="px-6 pt-6 pb-0">
                  {title && (
                    <Heading level="h3" id="modal-title" className="text-xl font-semibold mb-2">
                      {title}
                    </Heading>
                  )}
                  {description && (
                    <p id="modal-description" className="text-neutral-600 dark:text-neutral-400">
                      {description}
                    </p>
                  )}
                </div>
              )}
              
              {/* Body */}
              <div className={cn('p-6', bodyClassName)}>
                {children}
              </div>
              
              {/* Footer */}
              {footer && (
                <div className={cn('px-6 py-4 bg-neutral-50 dark:bg-neutral-900 rounded-b-lg border-t border-neutral-200 dark:border-neutral-700', footerClassName)}>
                  {footer}
                </div>
              )}
            </motion.div>
          </motion.div>
        </Fragment>
      )}
    </AnimatePresence>
  );
};

export interface ModalHeaderProps {
  title: React.ReactNode;
  description?: React.ReactNode;
  className?: string;
}

export const ModalHeader: React.FC<ModalHeaderProps> = ({
  title,
  description,
  className,
}) => (
  <div className={cn('mb-4', className)}>
    <Heading level="h3" id="modal-title" className="text-xl font-semibold mb-2">
      {title}
    </Heading>
    {description && (
      <p id="modal-description" className="text-neutral-600 dark:text-neutral-400">
        {description}
      </p>
    )}
  </div>
);

export interface ModalFooterProps {
  children: React.ReactNode;
  className?: string;
}

export const ModalFooter: React.FC<ModalFooterProps> = ({
  children,
  className,
}) => (
  <div className={cn('flex justify-end space-x-2', className)}>
    {children}
  </div>
);

export interface ModalActionsProps {
  onConfirm: () => void;
  onCancel: () => void;
  confirmText?: string;
  cancelText?: string;
  confirmVariant?: VariantProps<typeof buttonVariants>['variant'];
  confirmDisabled?: boolean;
  confirmLoading?: boolean;
  className?: string;
}

export const ModalActions: React.FC<ModalActionsProps> = ({
  onConfirm,
  onCancel,
  confirmText = 'Confirm',
  cancelText = 'Cancel',
  confirmVariant = 'default',
  confirmDisabled = false,
  confirmLoading = false,
  className,
}) => (
  <div className={cn('flex justify-end space-x-2', className)}>
    <Button variant="outline" onClick={onCancel}>
      {cancelText}
    </Button>
    <Button
      variant={confirmVariant}
      onClick={onConfirm}
      disabled={confirmDisabled || confirmLoading}
    >
      {confirmLoading ? 'Loading...' : confirmText}
    </Button>
  </div>
);

Modal.Header = ModalHeader;
Modal.Footer = ModalFooter;
Modal.Actions = ModalActions;