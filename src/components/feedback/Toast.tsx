import React, { useState, useEffect, createContext, useContext } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../utils/cn';
import { AlertCircle, CheckCircle, Info, X, XCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Define toast variants
const toastVariants = cva(
  'pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-4 shadow-lg transition-all',
  {
    variants: {
      variant: {
        default: 'bg-white border-neutral-200 text-neutral-900 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-50',
        info: 'bg-primary-50 border-primary-200 text-primary-900 dark:bg-primary-950 dark:border-primary-900 dark:text-primary-100',
        success: 'bg-success-50 border-success-200 text-success-900 dark:bg-success-950 dark:border-success-900 dark:text-success-100',
        warning: 'bg-warning-50 border-warning-200 text-warning-900 dark:bg-warning-950 dark:border-warning-900 dark:text-warning-100',
        error: 'bg-error-50 border-error-200 text-error-900 dark:bg-error-950 dark:border-error-900 dark:text-error-100',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

// Toast component props
export interface ToastProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof toastVariants> {
  title?: string;
  description?: string;
  autoClose?: boolean;
  duration?: number;
  onClose?: () => void;
  showIcon?: boolean;
}

// Toast component
export const Toast = React.forwardRef<HTMLDivElement, ToastProps>(
  ({ className, variant, title, description, autoClose = true, duration = 5000, onClose, showIcon = true, ...props }, ref) => {
    const [isVisible, setIsVisible] = useState(true);
    
    // Auto close toast after duration
    useEffect(() => {
      if (autoClose) {
        const timer = setTimeout(() => {
          setIsVisible(false);
        }, duration);
        
        return () => clearTimeout(timer);
      }
    }, [autoClose, duration]);
    
    // Handle closing animation end
    const handleAnimationComplete = () => {
      if (!isVisible && onClose) {
        onClose();
      }
    };
    
    // Get icon based on variant
    const getIcon = () => {
      if (!showIcon) return null;
      
      switch (variant) {
        case 'info':
          return <Info className="h-5 w-5 text-primary-500 dark:text-primary-400" />;
        case 'success':
          return <CheckCircle className="h-5 w-5 text-success-500 dark:text-success-400" />;
        case 'warning':
          return <AlertCircle className="h-5 w-5 text-warning-500 dark:text-warning-400" />;
        case 'error':
          return <XCircle className="h-5 w-5 text-error-500 dark:text-error-400" />;
        default:
          return <Info className="h-5 w-5 text-neutral-500 dark:text-neutral-400" />;
      }
    };
    
    return (
      <AnimatePresence>
        {isVisible && (
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, height: 0, marginTop: 0 }}
            transition={{ duration: 0.3 }}
            onAnimationComplete={handleAnimationComplete}
            className={cn(toastVariants({ variant }), className)}
            role="alert"
            aria-live="polite"
            {...props}
          >
            <div className="flex items-start gap-3 w-full">
              {showIcon && (
                <div className="flex-shrink-0 mt-0.5">
                  {getIcon()}
                </div>
              )}
              <div className="flex-1">
                {title && <div className="font-medium">{title}</div>}
                {description && (
                  <div className={cn("text-sm opacity-90", !title && "mt-0")}>
                    {description}
                  </div>
                )}
              </div>
            </div>
            <button
              onClick={() => setIsVisible(false)}
              className="rounded-full p-1 flex-shrink-0 hover:bg-neutral-200 dark:hover:bg-neutral-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
              aria-label="Close toast"
            >
              <X className="h-4 w-4" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    );
  }
);

Toast.displayName = 'Toast';

// Toast context for managing toasts
type ToastType = {
  id: string;
  variant?: ToastProps['variant'];
  title?: string;
  description?: string;
  duration?: number;
  showIcon?: boolean;
};

type ToastContextType = {
  toasts: ToastType[];
  addToast: (toast: Omit<ToastType, 'id'>) => string;
  removeToast: (id: string) => void;
  removeAllToasts: () => void;
};

const ToastContext = createContext<ToastContextType | undefined>(undefined);

// Toast Provider component
export const ToastProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [toasts, setToasts] = useState<ToastType[]>([]);
  
  const addToast = (toast: Omit<ToastType, 'id'>) => {
    const id = Math.random().toString(36).substring(2, 9);
    setToasts((prev) => [...prev, { ...toast, id }]);
    return id;
  };
  
  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  };
  
  const removeAllToasts = () => {
    setToasts([]);
  };
  
  return (
    <ToastContext.Provider value={{ toasts, addToast, removeToast, removeAllToasts }}>
      {children}
      {/* Toast container */}
      <div className="fixed top-4 right-4 z-50 flex flex-col gap-2 w-full max-w-sm">
        {toasts.map((toast) => (
          <Toast
            key={toast.id}
            variant={toast.variant}
            title={toast.title}
            description={toast.description}
            duration={toast.duration}
            showIcon={toast.showIcon}
            onClose={() => removeToast(toast.id)}
          />
        ))}
      </div>
    </ToastContext.Provider>
  );
};

// Hook for using toast
export const useToast = () => {
  const context = useContext(ToastContext);
  
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  
  return context;
};