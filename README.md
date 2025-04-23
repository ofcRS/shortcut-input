# Shortcut Input Component

A React component for capturing keyboard shortcuts with customizable modifier keys and a modern, user-friendly interface.

## Demo

Try the live demo: [Shortcut Input Demo](https://ofcrs.github.io/shortcut-input/)

## Features

- 🎯 Capture keyboard shortcuts with a clean, user-friendly interface
- ⌨️ Support for all keyboard keys including letters, numbers, and special characters
- 🔄 Customizable modifier keys (Control, Shift, Alt, Meta/Command)
- 🎚️ Toggle which modifier keys are treated as modifiers vs. regular keys
- 🔍 Visual feedback for active shortcuts
- 🧹 Clear button to reset the input
- 💅 Modern, responsive design with customizable styles
- 📱 Cross-platform support (Windows, macOS, Linux)
- 🔒 Type-safe with TypeScript support
  
## Usage

```tsx
import { ShortcutInput } from 'shortcut-input';

function App() {
  const [shortcut, setShortcut] = useState('');
  const [activeModifiers, setActiveModifiers] = useState(['Control', 'Shift', 'Alt']);

  return (
    <ShortcutInput
      value={shortcut}
      modifiers={activeModifiers}
      onChange={setShortcut}
      placeholder="Click to set shortcut"
    />
  );
}
```

## API Reference

### ShortcutInput Props

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `value` | `string` | Yes | - | The current shortcut value |
| `modifiers` | `Array<'Control' \| 'Alt' \| 'Shift' \| 'Meta'>` | Yes | - | Array of keys to be treated as modifiers |
| `onChange` | `(value: string) => void` | Yes | - | Callback function called when shortcut changes |
| `placeholder` | `string` | No | "Press Shortcut" | Placeholder text shown when no shortcut is set |

### Behavior

- The component captures keyboard events and formats them into a readable shortcut string (e.g., "Control+Shift+A")
- Modifier keys are sorted to appear before regular keys in the shortcut string
- Only one non-modifier key is allowed in a shortcut
- The component provides visual feedback when focused and when shortcuts are active
- Unselected modifier keys can be used as regular keys in shortcuts

## Styling

The component comes with a default modern style but can be customized through CSS. It uses a clean, accessible design with proper focus indicators and hover states.

## Browser Support

Works in all modern browsers that support React 18+.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT License - see the [LICENSE](LICENSE) file for details.
