# Shortcut Input

A React component for handling keyboard shortcuts with validation and real-time feedback.

## Installation

```bash
npm install shortcut-input
```

## Usage

```tsx
import { ShortcutInput } from 'shortcut-input';

function App() {
  const [shortcut, setShortcut] = useState('');

  return (
    <ShortcutInput
      value={shortcut}
      modifiers={['Control', 'Alt', 'Shift', 'CapsLock', 'Meta']}
      onChange={(value) => setShortcut(value)}
    />
  );
}
```

## Props

- `value` (string): Current shortcut value (e.g., 'Control+Shift+a')
- `modifiers` (string[]): Array of modifier keys (e.g., ['Control', 'Alt', 'Shift', 'CapsLock', 'Meta'])
- `onChange` (function): Callback that receives the new shortcut value

## Features

- Real-time shortcut validation
- Focus management
- Visual feedback for current state
- Support for multiple modifier keys
- Maintains last valid shortcut
- Prevents invalid combinations
