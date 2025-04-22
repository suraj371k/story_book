import  { useState } from 'react';
import { ThemeProvider, useTheme } from './components/theme/ThemeProvider';
import { Sun, Moon, Lightbulb, AlertCircle, XCircle, CheckCircle } from 'lucide-react';
import { Heading, Paragraph } from './components/typography/Typography';
import { TextInput } from './components/inputs/TextInput';
import { Checkbox } from './components/inputs/Checkbox';
import { Button } from './components/inputs/Button';
import { ToastProvider, useToast } from './components/feedback/Toast';
import { Modal } from './components/feedback/Modal';

const DesignSystemDemo = () => {
  const { theme, toggleTheme } = useTheme();
  const { addToast } = useToast();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalSize, setModalSize] = useState<'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full'>('sm');

  const showToast = (variant: 'default' | 'info' | 'success' | 'warning' | 'error') => {
    const toastMap = {
      default: {
        title: 'Notification',
        description: 'This is a default notification.',
      },
      info: {
        title: 'Information',
        description: 'This action has been completed.',
      },
      success: {
        title: 'Success',
        description: 'Your changes have been saved!',
      },
      warning: {
        title: 'Warning',
        description: 'This may have unexpected results.',
      },
      error: {
        title: 'Error',
        description: 'There was a problem processing your request.',
      },
    };
    
    addToast({
      variant,
      title: toastMap[variant].title,
      description: toastMap[variant].description,
    });
  };
  
  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto p-6">
        <header className="flex justify-between items-center py-6 mb-8 border-b border-neutral-200 dark:border-neutral-800">
          <div>
            <Heading level="h1" className="text-3xl">Design System</Heading>
            <Paragraph className="text-neutral-600 dark:text-neutral-400 mt-4">
              Typography, Inputs, and Feedback Components
            </Paragraph>
          </div>
          <Button
            onClick={toggleTheme}
            variant="outline"
            leftIcon={theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
          >
            {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
          </Button>
        </header>
        
        <main className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Typography Section */}
          <section className="space-y-8">
            <div>
              <Heading level="h2" className="mb-4 border-b border-neutral-200 dark:border-neutral-800 pb-2">
                Typography
              </Heading>
              
              <div className="space-y-6">
                <div className="space-y-3">
                  <Heading level="h1">Heading 1</Heading>
                  <Heading level="h2">Heading 2</Heading>
                  <Heading level="h3">Heading 3</Heading>
                  <Heading level="h4">Heading 4</Heading>
                  <Heading level="h5">Heading 5</Heading>
                  <Heading level="h6">Heading 6</Heading>
                </div>
                
                <div className="space-y-3">
                  <Paragraph size="large">Large paragraph text</Paragraph>
                  <Paragraph>Default paragraph text</Paragraph>
                  <Paragraph size="small">Small paragraph text</Paragraph>
                </div>
              </div>
            </div>
            
            {/* Data Entry Components */}
            <div>
              <Heading level="h2" className="mb-4 border-b border-neutral-200 dark:border-neutral-800 pb-2">
                Data Entry Components
              </Heading>
              
              <div className="space-y-6">
                <div className="space-y-4">
                  <TextInput
                    label="Email"
                    placeholder="Enter your email"
                    type="email"
                    helperText="We'll never share your email with anyone else."
                  />
                  
                  <TextInput
                    label="Password"
                    placeholder="Enter your password"
                    type="password"
                    error="Password must be at least 8 characters."
                  />
                  
                  <TextInput
                    label="Username"
                    placeholder="Enter username"
                    value="johndoe"
                    success="Username is available!"
                    clearable
                  />
                </div>
                
                <div className="space-y-3">
                  <Checkbox
                    label="Accept terms and conditions"
                    hideNativeCheckbox
                  />
                  
                  <Checkbox
                    label="Subscribe to newsletter"
                    helperText="You can unsubscribe at any time."
                    hideNativeCheckbox
                  />
                  
                  <Checkbox
                    label="Remember me"
                    checked
                    hideNativeCheckbox
                  />
                  
                  <Checkbox
                    label="Disabled option"
                    disabled
                    hideNativeCheckbox
                  />
                </div>
              </div>
            </div>
          </section>
          
          {/* Feedback Components */}
          <section>
            <Heading level="h2" className="mb-4 border-b border-neutral-200 dark:border-neutral-800 pb-2">
              Feedback Components
            </Heading>
            
            <div className="space-y-8">
              {/* Toast Examples */}
              <div className="space-y-4">
                <Heading level="h3">Toast Messages</Heading>
                <Paragraph>Click the buttons below to trigger different toast messages:</Paragraph>
                
                <div className="flex flex-wrap gap-3">
                  <Button
                    onClick={() => showToast('default')}
                    variant="outline"
                  >
                    Default Toast
                  </Button>
                  
                  <Button
                    onClick={() => showToast('info')}
                    variant="secondary"
                    leftIcon={<Lightbulb size={16} />}
                  >
                    Info Toast
                  </Button>
                  
                  <Button
                    onClick={() => showToast('success')}
                    variant="success"
                    leftIcon={<CheckCircle size={16} />}
                  >
                    Success Toast
                  </Button>
                  
                  <Button
                    onClick={() => showToast('warning')}
                    variant="warning"
                    leftIcon={<AlertCircle size={16} />}
                  >
                    Warning Toast
                  </Button>
                  
                  <Button
                    onClick={() => showToast('error')}
                    variant="error"
                    leftIcon={<XCircle size={16} />}
                  >
                    Error Toast
                  </Button>
                </div>
              </div>
              
              {/* Modal Examples */}
              <div className="space-y-4">
                <Heading level="h3">Modal Dialog</Heading>
                <Paragraph>Click the button below to open a modal dialog:</Paragraph>
                
                <Button onClick={() => setIsModalOpen(true)}>
                  Open Modal
                </Button>
                
                <Modal
                  isOpen={isModalOpen}
                  onClose={() => setIsModalOpen(false)}
                  title="Modal Title"
                  size={modalSize}
                  description="This is a description for the modal dialog that provides more context."
                  footer={
                    <div className="flex justify-end space-x-2">
                      <Button variant="outline" onClick={() => setIsModalOpen(false)}>
                        Cancel
                      </Button>
                      <Button onClick={() => {
                        showToast('success');
                        setIsModalOpen(false);
                      }}>
                        Confirm
                      </Button>
                    </div>
                  }
                >
                  <div className="space-y-4">
                    <Paragraph>
                      This is the content of the modal dialog. Modals are used to display content
                      that requires user attention or interaction.
                    </Paragraph>
                    
                    <TextInput
                      label="Modal Form Input"
                      placeholder="Enter some text"
                    />
                  </div>
                </Modal>
              </div>
              
              {/* Example Variants */}
              <div className="space-y-4">
                <Heading level="h3">Button Variants</Heading>
                
                <div className="grid grid-cols-2 gap-3">
                  <Button variant="default">Default</Button>
                  <Button variant="secondary">Secondary</Button>
                  <Button variant="success">Success</Button>
                  <Button variant="warning">Warning</Button>
                  <Button variant="error">Error</Button>
                  <Button variant="outline">Outline</Button>
                  <Button variant="ghost">Ghost</Button>
                  <Button variant="link">Link</Button>
                </div>
              </div>
            </div>
          </section>
        </main>
        
        <footer className="mt-16 pt-8 border-t border-neutral-200 dark:border-neutral-800 text-center">
          <Paragraph className="text-neutral-500 dark:text-neutral-400">
            Design System Built with React, TypeScript, and TailwindCSS
          </Paragraph>
        </footer>
      </div>
    </div>
  );
};

function App() {
  return (
    <ThemeProvider>
      <ToastProvider>
        <DesignSystemDemo />
      </ToastProvider>
    </ThemeProvider>
  );
}

export default App;