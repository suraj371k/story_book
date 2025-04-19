import React from 'react';
import type { Preview } from '@storybook/react';
import '../src/index.css';
import { ThemeProvider } from '../src/components/theme/ThemeContext';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'light',
      values: [
        {
          name: 'light',
          value: '#ffffff',
        },
        {
          name: 'dark',
          value: '#1e293b',
        },
      ],
    },
  },
  decorators: [
    (Story) => (
      <ThemeProvider>
        <div className="p-6">
          <Story />
        </div>
      </ThemeProvider>
    ),
  ],
};

export default preview;