import React, { useState, useEffect, useRef, KeyboardEvent } from 'react';
import KeyDisplay from './components/KeyDisplay';

// Define allowed modifier keys type
type ModifierKey = 'Control' | 'Alt' | 'Shift' | 'Meta';

interface ShortcutInputProps {
  value: string;
  modifiers: ModifierKey[];
  onChange: (value: string) => void;
  placeholder?: string;
}

const styles = {
  container: {
    padding: '8px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    backgroundColor: '#fff',
    cursor: 'text',
    userSelect: 'none' as const,
    fontSize: '36px',
    fontWeight: 'bold',
    textAlign: 'center' as const,
    fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  focused: {
    outline: '2px solid #007bff',
  },
};

const ShortcutInput: React.FC<ShortcutInputProps> = ({ value, modifiers, onChange, placeholder = 'Press Shortcut' }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [currentKeys, setCurrentKeys] = useState<string[]>([]);
  const [lastValidShortcut, setLastValidShortcut] = useState(value);
  const inputRef = useRef<HTMLDivElement>(null);

  // Map key codes to display values
  const getDisplayKey = (code: string): string => {
    // Handle modifier keys
    if (code === 'ControlLeft' || code === 'ControlRight') return 'Control';
    if (code === 'AltLeft' || code === 'AltRight') return 'Alt';
    if (code === 'ShiftLeft' || code === 'ShiftRight') return 'Shift';
    if (code === 'MetaLeft' || code === 'MetaRight') return 'Meta';
    
    // Handle letter keys
    if (code.startsWith('Key')) {
      return code.slice(3);
    }
    
    // Handle number keys
    if (code.startsWith('Digit')) {
      return code.slice(5);
    }
    
    // Handle other special keys
    const specialKeys: Record<string, string> = {
      'Minus': '-',
      'Equal': '=',
      'BracketLeft': '[',
      'BracketRight': ']',
      'Semicolon': ';',
      'Quote': "'",
      'Backslash': '\\',
      'Comma': ',',
      'Period': '.',
      'Slash': '/',
      'Space': 'Space',
      'Enter': 'Enter',
      'Backspace': 'Backspace',
      'Tab': 'Tab',
      'Escape': 'Escape',
    };
    
    return specialKeys[code] || code;
  };

  const getModifierFromCode = (code: string): ModifierKey | null => {
    if (code === 'ControlLeft' || code === 'ControlRight') return 'Control';
    if (code === 'AltLeft' || code === 'AltRight') return 'Alt';
    if (code === 'ShiftLeft' || code === 'ShiftRight') return 'Shift';
    if (code === 'MetaLeft' || code === 'MetaRight') return 'Meta';
    return null;
  };

  const isModifierKey = (code: string): boolean => {
    const modifier = getModifierFromCode(code);
    return modifier !== null && modifiers.includes(modifier);
  };

  const isValidShortcut = (keys: string[]): boolean => {
    if (keys.length === 0) return false;
    
    const modifierCount = keys.filter(key => isModifierKey(key)).length;
    const nonModifiers = keys.filter(key => !isModifierKey(key));
    return modifierCount >= 1 && nonModifiers.length === 1;
  };

  const formatShortcut = (keys: string[]): string => {
    const sortedKeys = [...keys].sort((a, b) => {
      const aIsModifier = isModifierKey(a);
      const bIsModifier = isModifierKey(b);
      if (aIsModifier && !bIsModifier) return -1;
      if (!aIsModifier && bIsModifier) return 1;
      return 0;
    });
    
    return sortedKeys.map(getDisplayKey).join('+');
  };

  const getDisplayText = () => {
    // If we have current keys and they form a valid shortcut, show them
    if (currentKeys.length > 0 && isValidShortcut(currentKeys)) {
      return formatShortcut(currentKeys);
    }

    // If we have a valid shortcut, show it (even during invalid key combinations)
    if (lastValidShortcut) {
      return lastValidShortcut;
    }

    // If no valid shortcut exists yet, show in-progress keys
    if (currentKeys.length > 0) {
      return formatShortcut(currentKeys);
    }

    // Default empty state
    return isFocused ? 'Press Shortcut' : placeholder;
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    e.preventDefault();
    
    const code = e.code;
    if (!currentKeys.includes(code)) {
      const newKeys = [...currentKeys, code];
      const nonModifierCount = newKeys.filter(k => !isModifierKey(k)).length;
      
      if (isModifierKey(code) || nonModifierCount <= 1) {
        setCurrentKeys(newKeys);
        
        if (isValidShortcut(newKeys)) {
          const shortcut = formatShortcut(newKeys);
          setLastValidShortcut(shortcut);
          onChange(shortcut);
        }
      }
    }
  };

  const handleKeyUp = (e: KeyboardEvent<HTMLDivElement>) => {
    e.preventDefault();
    
    const code = e.code;
    const newKeys = currentKeys.filter(k => k !== code);
    setCurrentKeys(newKeys);
  };

  const handleFocus = () => {
    setIsFocused(true);
    setCurrentKeys([]);
  };

  const handleBlur = () => {
    setIsFocused(false);
    setCurrentKeys([]);
  };

  useEffect(() => {
    if (value !== lastValidShortcut) {
      setLastValidShortcut(value);
    }
  }, [value]);

  return (
    <div
      ref={inputRef}
      tabIndex={0}
      onKeyDown={handleKeyDown}
      onKeyUp={handleKeyUp}
      onFocus={handleFocus}
      onBlur={handleBlur}
      style={{
        ...styles.container,
        ...(isFocused ? styles.focused : {}),
      }}
    >
      <KeyDisplay shortcut={getDisplayText()} />
    </div>
  );
};

export default ShortcutInput; 