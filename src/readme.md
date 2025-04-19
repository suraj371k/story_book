# Design System with React + TypeScript

A comprehensive design system built with React, TypeScript, and TailwindCSS, featuring typography, data entry, and feedback components. This project demonstrates modern component architecture, accessibility practices, and theme management.

## Features

- 🎨 **Typography System**
  - Headings (H1-H6)
  - Paragraphs with size variants
  - Labels and Helper Text
  - Dark mode support

- 📝 **Data Entry Components**
  - Text Input with various states
  - Checkbox with custom styling
  - Support for validation states
  - Accessible form controls

- 💫 **Feedback Components**
  - Toast notifications
  - Modal dialogs
  - Multiple variants (success, error, warning, info)
  - Animated transitions

## Tech Stack

- React 18
- TypeScript
- TailwindCSS
- Framer Motion
- Lucide Icons
- Storybook

## Getting Started

1. Clone the repository:
```bash
git clone <repository-url>
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Launch Storybook:
```bash
npm run storybook
```

## Component Documentation

### Typography

The typography system includes components for consistent text styling:

- `Heading`: H1-H6 with proper semantic markup
- `Paragraph`: Text blocks with size variants
- `Label`: Form labels with accessibility support
- `HelperText`: Additional context for form fields

### Data Entry

Form components with built-in validation and states:

- `TextInput`: Text fields with validation states
- `Checkbox`: Custom styled checkboxes with labels

### Feedback

User feedback components with animations:

- `Toast`: Notification system with variants
- `Modal`: Dialog windows with backdrop

## Accessibility

- ARIA roles and attributes
- Keyboard navigation support
- Focus management
- Color contrast compliance
- Screen reader friendly

## Theme Support

- Light/Dark mode
- System preference detection
- Persistent theme selection
- Smooth transitions

## Development

### Directory Structure

```
src/
  ├── components/
  │   ├── feedback/
  │   │   ├── Modal.tsx
  │   │   ├── Toast.tsx
  │   │   └── stories/
  │   ├── inputs/
  │   │   ├── TextInput.tsx
  │   │   ├── Checkbox.tsx
  │   │   └── stories/
  │   └── typography/
  │       ├── Typography.tsx
  │       └── stories/
  ├── utils/
  └── App.tsx
```

### Running Tests

```bash
npm run test
```

### Building for Production

```bash
npm run build
```

